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

7. Testing
   - Write unit tests for the main components and custom hooks using a testing library like Jest.
   - Ensure coverage includes edge cases and error scenarios.

8. Styling
   - Ensure the application is responsive and looks good on different screen sizes.
   - Use CSS or CSS-in-JS for styling and avoid inline styles.

9. Accessibility
   - Ensure the application is accessible, following WCAG guidelines.
   - Use semantic HTML and ARIA attributes where necessary.

10. Type Safety
    - Use TypeScript for type safety throughout the application. Alternatively, if using JavaScript, ensure all components use Prop Types for type checking.
    - Ensure type definitions are clear and comprehensive.

## Preferences
- Minimal use of third-party libraries.
- The use of functional components and hooks over class components.
- Clean and modular code structure, consistent code style and formatting.
- Good commit messages and version control practices.
- Detailed documentation and comments where necessary.
- Proper error handling and edge case considerations.
- Showcase your knowledge of React and JavaScript/TypeScript.

## Bonus Points for Creativity
- Innovative and user-friendly UI/UX designs.
- Additional features such as drag-and-drop, task ordering.

## Submission
- Provide a link to a GitHub repository containing your solution.
- Include a README file with instructions on how to run the application, a brief description of your approach, and any additional notes or considerations.
