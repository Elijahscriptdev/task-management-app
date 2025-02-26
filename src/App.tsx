import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { TaskForm } from "./components/TaskForm";
import ErrorBoundary from "./components/ErrorBoundary";
import { useTaskManager } from "./hooks/useTaskManager";
import TaskList from "./components/TaskList";
import type { Task } from "./types/task";
import TaskFilter from "./components/TaskFilter";
import TaskSearch from "./components/TaskSearch";
import TaskSort from "./components/TaskSort";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    tasks,
    filter,
    search,
    sort,
    addTask,
    deleteTask,
    setFilter,
    setSearch,
    setSort,
    updateTask,
  } = useTaskManager();

  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  return (
    <ErrorBoundary>
      <div>
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              >
                Add Task
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mb-4 w-full">
              <TaskFilter filter={filter} setFilter={setFilter} />
              <TaskSearch search={search} setSearch={setSearch} />
              <TaskSort sort={sort} setSort={setSort} />
            </div>

            <TaskList
              tasks={tasks}
              onTaskClick={setSelectedTask}
              onDeleteTask={deleteTask}
              task={selectedTask}
              onUpdateTask={updateTask}
            />
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Task"
        >
          <TaskForm onSubmit={addTask} onCancel={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </ErrorBoundary>
  );
};

export default App;
