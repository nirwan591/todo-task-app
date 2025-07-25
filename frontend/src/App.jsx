// This is NOT runnable code without a backend
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_BASE_URL = 'http://localhost:5000/api/tasks'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCH TASKS ON COMPONENT MOUNT
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []); // Empty dependency array means this runs once on mount

  // ADD TASK FUNCTION (updates backend AND local state)
  const addTask = async (newTask) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const addedTask = await response.json(); // Backend should return the newly created task with its ID
      setTasks((prevTasks) => [...prevTasks, addedTask]);
    } catch (err) {
      setError(err.message);
    }
  };

  // MARK DONE FUNCTION (updates backend AND local state)
  const markDone = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // ... rest of your App.js JSX (return statement and styles) remains the same
  return (
    <div style={styles.appContainer}>
      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div style={styles.mainContentBox}>
        <div style={styles.column}>
          <h3 style={styles.subHeader}>Add a Task</h3>
          <TaskForm addTask={addTask} />
        </div>
        <div style={styles.verticalLine}></div>
        <div style={styles.column}>
          <div style={styles.taskListScrollContainer}>
            <TaskList tasks={tasks} markDone={markDone} />
          </div>
        </div>
      </div>
    </div>
  );
};
// Styles for the App component and its layout
const styles = {
 
  appContainer: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'flex-start',
    minHeight: '100vh',
    padding: '40px 20px', 
    backgroundColor: '#f0f2f5', 
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box', 
  },
  // Main box containing the form, divider, and task list
  mainContentBox: {
    display: 'flex', // Use flexbox for column layout
    width: '900px', // Fixed width for the entire content area
    backgroundColor: '#ffffff', // White background for the box
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)', // Subtle shadow
    padding: '30px', // Inner padding
    gap: '30px', // Space between the columns
    boxSizing: 'border-box',
  },
  // Styles for each column (left and right)
  column: {
    flex: 1, // Each column takes equal available space
  },
  // Styles for the vertical line divider
  verticalLine: {
    width: '1px', // Thin line
    backgroundColor: '#ddd', // Light gray color
    margin: '0 15px', // Horizontal margin around the line
    alignSelf: 'stretch', // Make the line stretch to the full height of its flex container
  },
  // Styles for sub-headers (e.g., "Add a Task")
  subHeader: {
    fontSize: '24px',
    fontWeight: 'normal', // Not bold as per mockup
    marginBottom: '30px', // Space below the header
    color: '#333', // Dark gray text color
  },
  // Container for the TaskList to enable scrolling
  taskListScrollContainer: {
    maxHeight: '400px', // Maximum height before scrolling is enabled
    overflowY: 'auto', // Enable vertical scrollbar when content exceeds maxHeight
    paddingRight: '10px', // Add some padding to prevent content from being hidden by scrollbar
  }
};

export default App;
