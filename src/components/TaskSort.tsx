import React from "react"
import type { TaskState } from "../types/task"

interface TaskSortProps {
  sort: TaskState["sort"]
  setSort: (sort: TaskState["sort"]) => void
}

const TaskSort: React.FC<TaskSortProps> = React.memo(({ sort, setSort }) => {
  
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-auto">
      <div className="w-full sm:w-auto">
        <label htmlFor="sortBy" className="lock text-sm font-medium text-gray-700 mb-1">
          Sort By
        </label>
        <select
          id="sortBy"
          value={sort.by}
          onChange={(e) => setSort({ ...sort, by: e.target.value as "dueDate" | "priority" })}
          className="block w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
        >
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700">
          Order
        </label>
        <select
          id="sortOrder"
          value={sort.order}
          onChange={(e) => setSort({ ...sort, order: e.target.value as "asc" | "desc" })}
          className="block w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  )
})

export default TaskSort

