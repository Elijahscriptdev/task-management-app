import React, { useState } from "react";
import type { Task } from "../types/task";
import { Modal } from "./Modal";
import TaskDetails from "./TaskDetails";
import { TaskForm } from "./TaskForm";

interface TaskListProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onDeleteTask: (id: string) => void;
  task?: Task;
  onUpdateTask: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = React.memo(
  ({ tasks, onTaskClick, onDeleteTask, task, onUpdateTask }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState<boolean>(false);

    return (
      <div>
        {tasks.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-600">
              No tasks found. Add a new task to get started!
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div
                  onClick={() => {
                    onTaskClick(task);
                    setIsModalOpen(true);
                  }}
                  className="cursor-pointer"
                >
                  <h3 className="font-bold">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-xs text-gray-500">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      task.priority === "high"
                        ? "bg-red-200 text-red-800"
                        : task.priority === "medium"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {task.priority}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ml-2 ${
                      task.status === "done"
                        ? "bg-blue-200 text-blue-800"
                        : task.status === "in-progress"
                        ? "bg-purple-200 text-purple-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      onTaskClick(task);
                      setIsModalOpenUpdate(true);
                    }}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-xs cursor-pointer"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded text-white text-xs cursor-pointer"
                    aria-label={`Delete task ${task.title}`}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Modal
          isOpen={isModalOpenUpdate}
          onClose={() => setIsModalOpenUpdate(false)}
          title="Update Task"
        >
          <TaskForm
            onSubmit={onUpdateTask}
            onCancel={() => setIsModalOpenUpdate(false)}
            details={task}
          />
        </Modal>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Task Details"
        >
          {task && (
            <TaskDetails
              details={task}
              onCancel={() => setIsModalOpen(false)}
            />
          )}
        </Modal>
      </div>
    );
  }
);

export default TaskList;
