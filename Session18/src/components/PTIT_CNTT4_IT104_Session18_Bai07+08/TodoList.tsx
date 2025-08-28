import React, { useReducer, useState } from "react";

type Job = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  jobs: Job[];
};

type Action =
  | { type: "ADD"; payload: Job }
  | { type: "DELETE"; payload: number }
  | { type: "TOGGLE"; payload: number };

const initialState: State = {
  jobs: [],
};

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      return { jobs: [...state.jobs, action.payload] };
    case "DELETE":
      return {
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case "TOGGLE":
      return {
        jobs: state.jobs.map((job) =>
          job.id === action.payload
            ? { ...job, completed: !job.completed }
            : job
        ),
      };
    default:
      return state;
  }
};

export default function TodoReducerApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const title = input.trim();
    if (!title) {
      alert("Tên công việc không được để trống");
      return;
    }
    const isExist = state.jobs.some((job) => job.title === title);
    if (isExist) {
      alert("Tên công việc đã tồn tại");
      return;
    }
    const newJob: Job = {
      id: Date.now(),
      title,
      completed: false,
    };
    dispatch({ type: "ADD", payload: newJob });
    setInput("");
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa công việc này?")) {
      dispatch({ type: "DELETE", payload: id });
    }
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  return (
    <div>
      <h3>Quản lý công việc (useReducer)</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập tên công việc"
      />
      <button onClick={handleAdd}>Thêm công việc</button>

      <ul>
        {state.jobs.map((job) => (
          <li key={job.id}>
            <input
              type="checkbox"
              checked={job.completed}
              onChange={() => handleToggle(job.id)}
            />
            <span
              style={{
                textDecoration: job.completed ? "line-through" : "none",
              }}
            >
              {job.title}
            </span>
            <button onClick={() => handleDelete(job.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
