import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from '@mui/material';
  import React, { useEffect, useRef, useState } from 'react';
  import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
  import { createTask, updateTask } from '../apis/task.api';
  import type { Task } from '../interfaces/task.interface';
  import { clearSelectedTask } from '../store/slices/task.slice';
  
  const TaskForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { selectedTask, tasks } = useAppSelector((state:any) => state.task);
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
    const [error, setError] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      if (selectedTask) {
        setTaskName(selectedTask.taskName || '');
        setPriority(selectedTask.priority || 'medium');
      } else {
        setTaskName('');
        setPriority('medium');
      }
    }, [selectedTask]);
  
    const validateInput = (name: string, priority: string) => {
      if (!name.trim()) {
        return 'Tên công việc không được để trống';
      }
      if (tasks.some((task:any) => task.taskName === name.trim() && task.id !== (selectedTask?.id || 0))) {
        return 'Tên công việc đã tồn tại';
      }
      if (!priority) {
        return 'Vui lòng chọn độ ưu tiên';
      }
      return '';
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const validationError = validateInput(taskName, priority);
      if (validationError) {
        setError(validationError);
        return;
      }
  
      const taskData: Omit<Task, 'id'> = {
        taskName: taskName.trim(),
        completed: false,
        priority,
      };
  
      if (selectedTask) {
        dispatch(updateTask({ ...taskData, id: selectedTask.id }));
        dispatch(clearSelectedTask());
      } else {
        dispatch(createTask(taskData));
      }
  
      setTaskName('');
      setPriority('medium');
      setError('');
      inputRef.current?.focus();
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
      >
        <TextField
          label="Công việc mới"
          variant="outlined"
          size="small"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="flex-1"
          inputRef={inputRef}
          error={!!error}
          helperText={error}
        />
        <FormControl size="small" className="w-36">
          <InputLabel>Ưu tiên</InputLabel>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            label="Ưu tiên"
          >
            <MenuItem value="low">Thấp</MenuItem>
            <MenuItem value="medium">Trung bình</MenuItem>
            <MenuItem value="high">Cao</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          {selectedTask ? 'Cập nhật' : 'Thêm'}
        </Button>
      </form>
    );
  };
  
  export default TaskForm;