import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import {
  deleteTask,
  getAllTasks,
  toggleTaskCompletion,
} from "../apis/task.api";
import type { Task } from "../interfaces/task.interface";
import TaskForm from "./TaskForm";
import FilterControls from "./FilterControls";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Checkbox,
  Tooltip,
} from "@mui/material";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { setSelectedTask } from "../store/slices/task.slice";

//Gom TaskItem vào trong đây
interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  priority: string;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  completed,
  priority,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const priorityColor =
    priority === "high"
      ? "bg-[#E53E3E]"
      : priority === "medium"
      ? "bg-[#ED8936]"
      : "bg-[#38A169]";

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white rounded-xl shadow-md border border-gray-200 mb-3">
      <div className="flex items-center gap-4">
        <Checkbox size="small" checked={completed} onChange={onToggle} />
        <div className="flex items-center gap-3">
          <h3 className={`text-[15px] font-normal ${completed ? "line-through text-gray-400" : "text-gray-800"}`}>
            {title}
          </h3>
          <span className={`inline-block text-white text-[10px] leading-none px-3 py-1 rounded-full ${priorityColor}`}>
            {priority.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Tooltip title="Xóa">
          <IconButton color="error" size="small" onClick={onDelete}>
            <DeleteOutline />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sửa">
          <IconButton color="primary" size="small" onClick={onEdit}>
            <EditOutlined />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tasks, status, error } = useAppSelector((state: { task: any; }) => state.task);

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      dispatch(deleteTask(deleteId));
      setDeleteId(null);
    }
  };

  const handleEdit = (task: Task) => {
    dispatch(setSelectedTask(task));
  };

  const filteredTasks = tasks.filter((task: { completed: any; priority: string; taskName: string; }) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && task.completed) ||
      (filters.status === "active" && !task.completed);
    const matchPriority =
      filters.priority === "all" || task.priority === filters.priority;
    const matchSearch = task.taskName
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    return matchStatus && matchPriority && matchSearch;
  });

  if (error) {
    return (
      <h1 className="text-red-500 text-center">Đã có lỗi xảy ra: {error}</h1>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">📝 Task Manager</h1>

      {status === "pending" && (
        <div className="flex justify-center mb-4">
          <div className="loader animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      <TaskForm />

      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />

      <div>
        {filteredTasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            id={task.id?.toString() || ""}
            title={task.taskName}
            completed={task.completed}
            priority={task.priority}
            onToggle={() => dispatch(toggleTaskCompletion(task))}
            onDelete={() => handleDelete(task.id || 0)}
            onEdit={() => handleEdit(task)}
          />
        ))}
      </div>

      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>Bạn có chắc muốn xóa công việc này?</DialogContent>
        <DialogActions>
          <IconButton onClick={() => setDeleteId(null)} color="primary">
            Hủy
          </IconButton>
          <IconButton onClick={confirmDelete} color="error">
            Xóa
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskList;
