export type Priority = 'low' | 'medium' | 'high';
export type Status = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

export interface TaskFilterOptions {
  status?: Status;
  priority?: Priority;
  search?: string;
  sortBy?: 'dueDate' | 'priority';
  sortOrder?: 'asc' | 'desc';
}