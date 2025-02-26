import React from "react"
import type { TaskState, Status, Priority } from "../types/task"

interface TaskFilterProps {
  filter: TaskState["filter"]
  setFilter: (filter: Partial<TaskState["filter"]>) => void
}

const TaskFilter: React.FC<TaskFilterProps> = React.memo(({ filter, setFilter }) => {
  return (
    <div className="flex space-x-4">
      <div>
        <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          id="statusFilter"
          value={filter.status}
          onChange={(e) => setFilter({ status: e.target.value as Status | "all" })}
          className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        >
          <option value="all">All</option>
          <option value="to-do">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div>
        <label htmlFor="priorityFilter" className="block text-sm font-medium text-gray-700">
          Priority
        </label>
        <select
          id="priorityFilter"
          value={filter.priority}
          onChange={(e) => setFilter({ priority: e.target.value as Priority | "all" })}
          className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
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

