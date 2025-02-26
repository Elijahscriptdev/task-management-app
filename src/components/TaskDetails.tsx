import React from "react";
import type { Task } from "../types/task";

interface TaskListProps {
  details: Task;
  onCancel: () => void;
}

const TaskDetails: React.FC<TaskListProps> = React.memo(
  ({ details }) => {
    return (
      <div>
        <div className="bg-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <h3 className="font-bold">{details.title}</h3>
            <p className="text-sm text-gray-600">{details.description}</p>
            <p className="text-xs text-gray-500">
              Due: {new Date(details.dueDate).toLocaleDateString()}
            </p>
            <span
              className={`text-xs px-2 py-1 rounded ${
                details.priority === "high"
                  ? "bg-red-200 text-red-800"
                  : details.priority === "medium"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {details.priority}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded ml-2 ${
                details.status === "done"
                  ? "bg-blue-200 text-blue-800"
                  : details.status === "in-progress"
                  ? "bg-purple-200 text-purple-800"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {details.status}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export default TaskDetails;
