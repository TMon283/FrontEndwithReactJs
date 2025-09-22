import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from '@mui/material';

import React from 'react';
import type { Student } from '../utils/types';

interface StudentFormProps {
  mode: 'create' | 'view' | 'edit';
  initial?: Student | null;
  onSubmit: (student: Student) => void;
  onCancel: () => void;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({ mode, initial, onSubmit, onCancel }) => {
  const [form, setForm] = React.useState<Student>(
    initial ?? {
      id: '',
      name: '',
      age: 0,
      gender: 'Nam',
      birthday: '',
      hometown: '',
      address: '',
    }
  );

  const readOnly = mode === 'view';

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.id || !form.name) return;
    onSubmit(form);
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
          disabled={readOnly || mode === 'edit'}
          fullWidth
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          disabled={readOnly}
          fullWidth
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          disabled={readOnly}
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
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          disabled={readOnly}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          disabled={readOnly}
          fullWidth
        />
        <div className="flex gap-2">
          {mode !== 'view' && (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {mode === 'create' ? 'Thêm mới' : 'Cập nhật'}
            </Button>
          )}
          <Button variant="outlined" onClick={onCancel}>Hủy</Button>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
