import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import React from 'react';
import type { Student } from '../utils/types';

interface StudentListProps {
  students: Student[];
  onView: (student: Student) => void;
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
  emptyMessage?: string;
}

const StudentList: React.FC<StudentListProps> = ({ students, onView, onEdit, onDelete, emptyMessage }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Tên sinh viên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                {emptyMessage ?? 'Không có dữ liệu'}
              </TableCell>
            </TableRow>
          ) : (
            students.map((s, i) => (
              <TableRow key={s.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{s.id}</TableCell>
                <TableCell>{s.name}</TableCell>
                <TableCell>{s.age}</TableCell>
                <TableCell>{s.gender}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="contained" color="error" onClick={() => onView(s)}>
                      Xem
                    </Button>
                    <Button variant="contained" color="warning" onClick={() => onEdit(s)}>
                      Sửa
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => onDelete(s)}
                    >
                      Xóa
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
