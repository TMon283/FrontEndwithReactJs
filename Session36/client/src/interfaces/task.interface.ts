export interface Task {
    id?: number;
    taskName: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
  }
  
  export interface TaskState {
    status: 'idle' | 'pending' | 'success' | 'failed';
    tasks: Task[];
    error: string | null;
    selectedTask: Task | null;
  }