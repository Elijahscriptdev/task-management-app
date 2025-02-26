# Task Management Application

## Description

A dynamic and interactive task management application that allows users to manage their tasks efficiently.

## Requirements

1. Implement a component that displays a list of tasks.
   - Each task should have a title, description, due date, priority (low, medium, high), and status (to-do, in-progress, done).
   - Allow users to add, edit, and delete tasks.
   - Allow users to filter tasks by status and priority.
   - Implement search functionality to find tasks by title or description.
   - Allow users to sort tasks by due date and priority.
   - Persist task data in local storage or an API.

2. State Management
   - Use any React state management library.
   - Ensure state updates are optimized and avoid unnecessary re-renders.

3. Task Details
   - Clicking on a task should open a detailed view of the task in a modal or a separate component.
   - In the detailed view, users should be able to update the task's status and priority.

4. Performance Optimization
   - Implement memoization where appropriate to optimize performance.
   - Avoid performance pitfalls like unnecessary renders and state updates.

5. Custom Hooks
   - Create at least one custom hook for reusable logic, such as fetching initial task data from an API or local storage.

6. Error Handling
   - Implement error boundaries to catch and display errors in the UI.
   - Display appropriate error messages for failed actions (e.g., adding or deleting tasks).

7. Styling
   - Ensure the application is responsive and looks good on different screen sizes.
   - Use CSS or CSS-in-JS for styling and avoid inline styles.


## Running the Application

To run the application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd task-management-app
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```

3. **Start the Development Server**:
   ```bash
   yarn start
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` in your web browser to view the application.

   ```bash
