export type Priority = "low" | "medium" | "high";
export type Status = "todo" | "in-progress" | "done";

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
  sortBy?: "dueDate" | "priority";
  sortOrder?: "asc" | "desc";
}

export interface TaskState {
  tasks: Task[];
  filter: {
    status: Status | "all";
    priority: Priority | "all";
  };
  search: string;
  sort: {
    by: "dueDate" | "priority";
    order: "asc" | "desc";
  };
}

export type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "SET_FILTER"; payload: Partial<TaskState["filter"]> }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_SORT"; payload: TaskState["sort"] }
  | { type: "SET_TASKS"; payload: Task[] };
