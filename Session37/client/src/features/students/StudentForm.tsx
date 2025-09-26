import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import type { Student } from "./types";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../../store/slices/studentSlices";

interface Props {
  open: boolean;
  initial?: Partial<Student>;
  onClose: () => void;
}

const StudentForm: React.FC<Props> = ({ open, initial = {}, onClose }) => {
  const [name, setName] = useState(initial.name ?? "");
  const [age, setAge] = useState(initial.age ?? 16);
  const [grade, setGrade] = useState(initial.grade ?? "");

  const dispatch: any = useDispatch();

  useEffect(() => {
    setName(initial.name ?? "");
    setAge(initial.age ?? 16);
    setGrade(initial.grade ?? "");
  }, [initial, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const student: Student = {
      id: initial.id ?? "", 
      name: name.trim(),
      age: Number(age),
      grade: grade.trim(),
    };

    if (initial.id) {
      dispatch(updateStudent(student)); 
    } else {
      dispatch(addStudent(student)); 
    }

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Student" : "Add Student"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            fullWidth
            inputProps={{ min: 1 }}
          />
          <TextField
            label="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            placeholder="e.g. 10A1"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default StudentForm;
