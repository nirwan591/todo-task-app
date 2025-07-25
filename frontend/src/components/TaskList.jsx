import React from "react";

const TaskList = ({ tasks, markDone }) => {
  // Get only the last 5 tasks
  const tasksToDisplay = tasks.slice(-5);

  return (
    <div style={styles.taskListContainer}>
      {/* Conditional rendering for no tasks */}
      {tasksToDisplay.length === 0 ? (
        <p style={styles.noTasksMessage}>No tasks added yet. Add a new task!</p>
      ) : (
        tasksToDisplay.map((task) => (
          <div key={task.id} style={styles.taskCard}>
            <div style={styles.taskContent}>
              <p style={styles.taskDescription}>{task.description}</p>
            </div>
            <button style={styles.doneButton} onClick={() => markDone(task.id)}>
              Done
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  taskListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    // Removed maxHeight and overflowY from here as they are now in App.js
  },
  taskCard: {
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  taskContent: {
    flexGrow: 1,
    marginRight: '15px',
  },
  taskDescription: {
    fontSize: '14px',
    color: '#333',
    margin: 0,
    lineHeight: '1.4',
    whiteSpace: 'normal',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: '40px',
  },
  doneButton: {
    padding: '8px 15px',
    backgroundColor: '#e0e0e0',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    minWidth: '70px',
    textAlign: 'center',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  noTasksMessage: {
    fontSize: '16px',
    color: '#888',
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default TaskList;