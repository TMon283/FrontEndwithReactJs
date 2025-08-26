import { useState } from 'react';
import EditModal from './EditModal';

type Job = {
  id: number;
  title: string;
  status: boolean;
};

export default function TodoList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [taskName, setTaskName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim() === '') {
      alert('Nội dung công việc không được để trống');
      return;
    }
    const isExist = jobs.some((item) => item.title === taskName);
    if (isExist) {
      alert('Nội dung công việc đã tồn tại');
      return;
    }
    const newJob: Job = {
      id: Date.now(),
      title: taskName,
      status: false,
    };
    setJobs([...jobs, newJob]);
    setTaskName('');
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa hay không')) {
      setJobs(jobs.filter((item) => item.id !== id));
    }
  };

  const toggleStatus = (id: number) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, status: !job.status } : job
      )
    );
  };

  const handleEdit = (id: number, currentTitle: string) => {
    setIsEditing(true);
    setEditId(id);
    setEditValue(currentTitle);
  };

  const handleUpdate = () => {
    if (editValue.trim() === '') {
      alert('Nội dung công việc không được để trống');
      return;
    }
    const isExist = jobs.some(
      (item) => item.title === editValue && item.id !== editId
    );
    if (isExist) {
      alert('Nội dung công việc đã tồn tại');
      return;
    }
    setJobs(
      jobs.map((job) =>
        job.id === editId ? { ...job, title: editValue } : job
      )
    );
    setIsEditing(false);
    setEditId(null);
    setEditValue('');
  };

  const countCompletedJobs = () => jobs.filter((job) => job.status).length;

  return (
    <div>
      <h3 style={{ textAlign: 'center', marginBottom: 40 }}>Quản lý công việc</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={handleChange}
          placeholder="Nhập tên công việc"
        />
        <button>Thêm</button>
      </form>

      <ul>
        {jobs.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => toggleStatus(item.id)}
            />
            <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>
              {item.title}
            </span>
            <button onClick={() => handleEdit(item.id, item.title)}>Sửa</button>
            <button onClick={() => handleDelete(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>

      
      {jobs.length > 0 && countCompletedJobs() === jobs.length 
        ? (<p style={{ color: 'green'}}>Hoàn thành công việc</p>)
        : (<p> Công việc đã hoàn thành: {countCompletedJobs()} / {jobs.length} </p>)}

      {isEditing && (
        <EditModal
          editValue={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
