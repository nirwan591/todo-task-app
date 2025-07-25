import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addTask({ title, description });
      setTitle("");
      setDesc("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="title" style={styles.label}>Title</label>
      <input
        id="title"
        style={styles.input}
        placeholder="Type a task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description" style={styles.label}>Description</label>
      <textarea
        id="description"
        style={styles.textarea}
        placeholder="Type a description"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        required
      />

      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Reduced gap between elements for a more compact look
  },
  label: {
    fontSize: "14px", // Slightly smaller font for labels
    color: '#555',
    marginBottom: '0px', // Adjusted margin
  },
  input: {
    padding: "8px", // Decreased padding
    border: "1px solid #ccc",
    borderRadius: "3px", // Slightly less rounded corners
    fontSize: "14px", // Decreased font size
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: "8px", // Decreased padding
    border: "1px solid #ccc",
    borderRadius: "3px",
    minHeight: "70px", // Decreased min-height
    maxHeight: "70px", // Set max-height equal to min-height to fix height
    resize: "none", // Prevent user from resizing
    fontSize: "14px", // Decreased font size
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    marginTop: "15px", // Adjusted margin top
    padding: "8px 20px", // Decreased padding for a smaller button
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px", // Less rounded corners
    cursor: "pointer",
    fontSize: "14px", // Decreased font size for button
    fontWeight: 'bold',
    alignSelf: 'flex-end', // Aligns the button to the right within the flex column
    transition: 'background-color 0.2s ease-in-out',
    boxShadow: '0 2px 4px rgba(0,123,255,0.2)', // Smaller shadow
  },
};

export default TaskForm;