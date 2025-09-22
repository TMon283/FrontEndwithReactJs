import type { Student } from '../utils/types';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import Toolbar from '../components/Toolbar';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store/store';

const StudentManagement = () => {
  const students = useSelector((state: RootState) => state.student as Student[]);
  const dispatch = useDispatch();
  
  const [mode, setMode] = useState<'idle' | 'create' | 'view' | 'edit'>('idle');
  const [selected, setSelected] = useState<Student | null>(null);
  const [keyword, setKeyword] = useState<string>('');

  const filtered = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    if (!k) return students;
    return students.filter((s) =>
      [s.id, s.name, String(s.age), s.gender, s.hometown ?? '', s.address ?? '']
        .join(' ')
        .toLowerCase()
        .includes(k),
    );
  }, [students, keyword]);

  const handleAddStudent = (student: Student) => {
    const isDuplicated = students.some((s) => s.id === student.id);
    if (isDuplicated) {
      alert('Mã sinh viên đã tồn tại. Vui lòng nhập mã khác.');
      return;
    }
    dispatch({ type: 'ADD_STUDENT', payload: student });
    setMode('idle');
    setSelected(null);
  };

  const handleUpdateStudent = (student: Student) => {
    dispatch({ type: 'UPDATE_STUDENT', payload: student });
    setMode('idle');
    setSelected(null);
  };

  const handleDeleteStudent = (student: Student) => {
    if (!confirm('Bạn có chắc chắn muốn xóa không')) return;
    dispatch({ type: 'DELETE_STUDENT', payload: { id: student.id } });
    if (selected?.id === student.id) {
      setMode('idle');
      setSelected(null);
    }
  };

  const handleSearch = (kw: string) => {
    setKeyword(kw);
  };

  const handleAddClick = () => {
    setMode('create');
    setSelected(null);
  };

  const handleViewClick = (s: Student) => {
    setSelected(s);
    setMode('view');
  };

  const handleEditClick = (s: Student) => {
    setSelected(s);
    setMode('edit');
  };

  const handleCancelForm = () => {
    setMode('idle');
    setSelected(null);
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} onAdd={handleAddClick} />
        <StudentList
          students={filtered}
          onView={handleViewClick}
          onEdit={handleEditClick}
          onDelete={handleDeleteStudent}
          emptyMessage={keyword ? 'Không có sinh viên nào được tìm thấy' : 'Chưa có dữ liệu'}
        />
      </div>
      {mode !== 'idle' && (
        <StudentForm
          mode={mode}
          initial={selected}
          onSubmit={mode === 'create' ? handleAddStudent : handleUpdateStudent}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
};

export default StudentManagement;
