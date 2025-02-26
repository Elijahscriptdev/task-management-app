import { useReducer, useEffect, useCallback } from "react"
import type { TaskState, TaskAction, Task } from "../types/task"

const initialState: TaskState = {
  tasks: [],
  filter: { status: "all", priority: "all" },
  search: "",
  sort: { by: "dueDate", order: "asc" },
}

function taskReducer(state: TaskState, action: TaskAction): TaskState {
    switch (action.type) {
      case "ADD_TASK":
        return { ...state, tasks: [...state.tasks, action.payload] }
      case "UPDATE_TASK":
        return {
          ...state,
          tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
        }
      case "DELETE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        }
      case "SET_FILTER":
        return { ...state, filter: { ...state.filter, ...action.payload } }
      case "SET_SEARCH":
        return { ...state, search: action.payload }
      case "SET_SORT":
        return { ...state, sort: action.payload }
      case "SET_TASKS":
        return { ...state, tasks: action.payload }
      default:
        return state
    }
  }

export function useTaskManager() {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      dispatch({ type: "SET_TASKS", payload: JSON.parse(savedTasks) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks))
  }, [state.tasks])

  const addTask = useCallback((task: Task) => {
    dispatch({ type: "ADD_TASK", payload: task })
  }, [])

  const updateTask = useCallback((task: Task) => {
    dispatch({ type: "UPDATE_TASK", payload: task })
  }, [])

  const deleteTask = useCallback((id: string) => {
    dispatch({ type: "DELETE_TASK", payload: id })
  }, [])

  const setFilter = useCallback((filter: Partial<TaskState["filter"]>) => {
    dispatch({ type: "SET_FILTER", payload: filter })
  }, [])

  const setSearch = useCallback((search: string) => {
    dispatch({ type: "SET_SEARCH", payload: search })
  }, [])

  const setSort = useCallback((sort: TaskState["sort"]) => {
    dispatch({ type: "SET_SORT", payload: sort })
  }, [])

  const filteredAndSortedTasks = useCallback(() => {
    return state.tasks
      .filter((task) => {
        const matchesStatus = state.filter.status === "all" || task.status === state.filter.status
        const matchesPriority = state.filter.priority === "all" || task.priority === state.filter.priority
        const matchesSearch =
          state.search.toLowerCase().trim() === "" ||
          (task.title && task.title.toLowerCase().includes(state.search.toLowerCase())) ||
          (task.description && task.description.toLowerCase().includes(state.search.toLowerCase()))
        return matchesStatus && matchesPriority && matchesSearch
      })
      .sort((a, b) => {
        if (state.sort.by === "dueDate") {
          return state.sort.order === "asc"
            ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
            : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
        } else {
          const priorityOrder = { low: 1, medium: 2, high: 3 }
          return state.sort.order === "asc"
            ? priorityOrder[a.priority] - priorityOrder[b.priority]
            : priorityOrder[b.priority] - priorityOrder[a.priority]
        }
      })
  }, [state])

  return {
    tasks: filteredAndSortedTasks(),
    filter: state.filter,
    search: state.search,
    sort: state.sort,
    addTask,
    updateTask,
    deleteTask,
    setFilter,
    setSearch,
    setSort,
  }
}

