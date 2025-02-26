import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  status: "to-do" | "in-progress" | "done";
}

const TaskList: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
    </div>
  );
};

export default TaskList;
