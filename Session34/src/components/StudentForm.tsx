import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from '@mui/material';

import React from 'react';
import type { Student } from '../utils/types';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store/store';

interface StudentFormProps {
  mode: 'create' | 'view' | 'edit';
  initial?: Student | null;
  onSubmit: (student: Student) => void;
  onCancel: () => void;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({ mode, initial, onSubmit, onCancel }) => {
  const students = useSelector((state: RootState) => state.student as Student[]);
  const [form, setForm] = React.useState<Student>(
    initial ?? {
      id: '',
      name: '',
      age: 19,
      gender: 'Nam',
      birthday: '',
      hometown: '',
      address: '',
    }
  );
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const readOnly = mode === 'view';
  const idInputRef = React.useRef<HTMLInputElement | null>(null);
  const nameInputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    setForm(
      initial ?? {
        id: '',
        name: '',
        age: 19,
        gender: 'Nam',
        birthday: '',
        hometown: '',
        address: '',
      }
    );
    setErrors({});
  }, [initial, mode]);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    if (name === 'age') {
      const num = Number(value);
      setForm({ ...form, age: Number.isNaN(num) ? 0 : num });
      setErrors((prev) => ({ ...prev, age: '' }));
      return;
    }
    setForm({ ...form, [name]: value });
    setErrors((prev) => ({ ...prev, [name as string]: '' }));
  };

  const handleSubmit = () => {
    const idTrim = form.id.trim();
    const nameTrim = form.name.trim();

    const newErrors: Record<string, string> = {};
    if (!idTrim) newErrors.id = 'Mã sinh viên không được để trống';
    if (!nameTrim) newErrors.name = 'Tên sinh viên không được để trống';
    if (form.age === null || form.age === undefined || Number.isNaN(form.age)) newErrors.age = 'Tuổi không được để trống';
    else if (form.age < 0) newErrors.age = 'Tuổi không được nhỏ hơn 0';
    if (form.birthday) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const dob = new Date(form.birthday);
      if (dob > today) newErrors.birthday = 'Ngày sinh không được ở tương lai';
    }
    if (!form.hometown || form.hometown.trim() === '') newErrors.hometown = 'Nơi sinh không được để trống';
    if (!form.address || form.address.trim() === '') newErrors.address = 'Địa chỉ không được để trống';

    if (mode === 'create') {
      const idDup = students.some((s) => s.id === idTrim);
      if (idDup) newErrors.id = 'Mã sinh viên không được phép trùng';
      const nameDup = students.some((s) => s.name.trim().toLowerCase() === nameTrim.toLowerCase());
      if (nameDup) newErrors.name = 'Tên sinh viên không được phép trùng';
    }
    if (mode === 'edit' && initial) {
      const idDup = students.some((s) => s.id === idTrim && s.id !== initial.id);
      if (idDup) newErrors.id = 'Mã sinh viên không được phép trùng';
      const nameDup = students.some(
        (s) => s.name.trim().toLowerCase() === nameTrim.toLowerCase() && s.id !== initial.id,
      );
      if (nameDup) newErrors.name = 'Tên sinh viên không được phép trùng';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (newErrors.id) idInputRef.current?.focus();
      else if (newErrors.name) nameInputRef.current?.focus();
      return;
    }

    onSubmit({ ...form, id: idTrim, name: nameTrim });
    if (mode === 'create') {
      setForm({
        id: '',
        name: '',
        age: 19,
        gender: 'Nam',
        birthday: '',
        hometown: '',
        address: '',
      });
      setErrors({});
      setTimeout(() => idInputRef.current?.focus(), 0);
    }
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          inputRef={idInputRef}
          disabled={readOnly || mode === 'edit'}
          error={Boolean(errors.id)}
          helperText={errors.id}
          fullWidth
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          inputRef={nameInputRef}
          disabled={readOnly}
          error={Boolean(errors.name)}
          helperText={errors.name}
          fullWidth
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          disabled={readOnly}
          error={Boolean(errors.age)}
          helperText={errors.age}
          fullWidth
        />
        <Select name="gender" value={form.gender} onChange={handleChange} fullWidth disabled={readOnly}>
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          disabled={readOnly}
          error={Boolean(errors.birthday)}
          helperText={errors.birthday}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          disabled={readOnly}
          error={Boolean(errors.hometown)}
          helperText={errors.hometown}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          disabled={readOnly}
          error={Boolean(errors.address)}
          helperText={errors.address}
          fullWidth
        />
        <div className="flex gap-2">
          {mode !== 'view' && (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {mode === 'create' ? 'Thêm mới' : 'Cập nhật'}
            </Button>
          )}
          <Button variant="contained" color="error" onClick={onCancel}>Hủy</Button>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
