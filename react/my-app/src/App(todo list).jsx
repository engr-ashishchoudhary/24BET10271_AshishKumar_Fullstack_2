import { useState } from "react";

export default function App() {
  // State to store all tasks
  const [tasks, setTasks] = useState([]);

  // State to store the current input value
  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    // Don't add empty tasks
    if (newTask.trim() === "") return;

    // Create a new task object
    const task = {
      id: Date.now(),
      text: newTask,
    };

    // Add the new task to the existing tasks
    setTasks([...tasks, task]);

    // Clear the input field
    setNewTask("");
  };

  // Function to delete a task
  const deleteTask = (id) => {
    // Remove the task with the matching id
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      {/* Submit Button */}
      <button onClick={addTask}>Submit</button>

      <hr />

      {/* Display Tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}