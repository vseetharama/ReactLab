import { useState } from 'react';

const ToDOFunction = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>React To-Do List</h1>

      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter tasks"
        />
        <button onClick={addTask} style={styles.addbutton}>
          Add Task
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={task.completed ? styles.completed : styles.pending}
          >
            <span
              onClick={() => toggleTask(index)}
              style={{ cursor: "pointer" }}
            >
              {index + 1}. {task.completed ? "✅" : "❌"} {task.text}
            </span>

            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  addbutton: {
    marginLeft: "10px",
    padding: "8px"
  },
  taskList: {
    listStyleType: "none",
    marginTop: "20px"
  },
  pending: {
    padding: "10px",
    fontSize: "18px"
  },
  completed: {
    padding: "10px",
    fontSize: "18px",
    textDecoration: "line-through",
    color: "gray"
  },
  deleteButton: {
    marginLeft: "10px"
  }
};

export default ToDOFunction;