import React, { useState } from "react";

function App() {

  const [tasks, setTasks] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const text = tasks.trim();

    if (text === "") return;

    setTaskList([...taskList, text]);
    setTasks("");
  };

  const removeTask = (index) => {
    const updated = taskList.filter((task, i) => i !== index);
    setTaskList(updated);
  };

  return (
    <div style={styles.body}>

      <div style={styles.container}>
        <h2>To-Do List</h2>

        <input
          type="text"
          placeholder="Enter task"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />

        <button onClick={addTask} style={{ marginLeft: "10px" }}> 
        Add
        </button>

        <ul>
          {taskList.map((task, index) => (
            <li key={index} style={styles.listItem}>
              {task}

              <button onClick={() => removeTask(index)}>
                Remove
              </button>

            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "50px",
    minHeight: "100vh"
  },

  container: {
    background: "white",
    padding: "20px",
    width: "350px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },

  listItem: {
    margin: "8px 0",
    display: "flex",
    justifyContent: "space-between"
  }
};

export default App;