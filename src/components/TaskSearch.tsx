import React from "react";

interface TaskSearchProps {
  search: string;
  setSearch: (search: string) => void;
}

const TaskSearch: React.FC<TaskSearchProps> = React.memo(
  ({ search, setSearch }) => {
    return (
      <div className="">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Search
        </label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 form-input-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none
                   sm:text-sm sm:leading-5
                   md:text-base md:leading-6
                   lg:text-lg lg:leading-7"
        />
      </div>
    );
  }
);

export default TaskSearch;
