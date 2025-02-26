import React from "react"
import type { TaskState, Status, Priority } from "../types/task"

interface TaskFilterProps {
  filter: TaskState["filter"]
  setFilter: (filter: Partial<TaskState["filter"]>) => void
}

const TaskFilter: React.FC<TaskFilterProps> = React.memo(({ filter, setFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-auto">
      <div className="w-full sm:w-auto">
        <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          id="statusFilter"
          value={filter.status}
          onChange={(e) => setFilter({ status: e.target.value as Status | "all" })}
          className="block w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
        >
          <option value="all">All</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div className="w-full sm:w-auto">
        <label htmlFor="priorityFilter" className="block text-sm font-medium text-gray-700 mb-1">
          Priority
        </label>
        <select
          id="priorityFilter"
          value={filter.priority}
          onChange={(e) => setFilter({ priority: e.target.value as Priority | "all" })}
          className="block w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  )
})

export default TaskFilter