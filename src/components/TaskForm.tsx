import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Task, Priority, Status } from "../types/task";

// Define the Yup validation schema
const taskSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  dueDate: Yup.string().required("Due date is required"),
  priority: Yup.string()
    .oneOf(["low", "medium", "high"])
    .required("Priority is required"),
  status: Yup.string()
    .oneOf(["todo", "in-progress", "done"])
    .required("Status is required"),
});

type TaskFormData = Yup.InferType<typeof taskSchema>;

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const formik = useFormik({
    initialValues: initialData || {
      title: "",
      description: "",
      dueDate: new Date().toISOString().split("T")[0],
      priority: "medium" as Priority,
      status: "todo" as Status,
    },
    validationSchema: taskSchema,
    onSubmit: (values) => {
        onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          placeholder="Enter task title"
        />
        {formik.touched.title && formik.errors.title && (
          <p className="mt-2 text-sm text-red-600">{formik.errors.title}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          rows={4}
          className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
          placeholder="Enter task description"
        />
        {formik.touched.description && formik.errors.description && (
          <p className="mt-2 text-sm text-red-600">
            {formik.errors.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="dueDate"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formik.values.dueDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
          {formik.touched.dueDate && formik.errors.dueDate && (
            <p className="mt-2 text-sm text-red-600">{formik.errors.dueDate}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {formik.touched.priority && formik.errors.priority && (
            <p className="mt-2 text-sm text-red-600">
              {formik.errors.priority}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="status"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        {formik.touched.status && formik.errors.status && (
          <p className="mt-2 text-sm text-red-600">{formik.errors.status}</p>
        )}
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 form-input-shadow transition-all duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-3 text-sm font-medium bg-primary hover:bg-primary/90 rounded-lg shadow-lg shadow-primary/25 transition-all duration-200"
        >
          {initialData ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};
