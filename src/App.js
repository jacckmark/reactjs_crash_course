import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const getTask = async id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const removeTask = async id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    if (res.status === 200) {
      setTasks(tasks.filter(task => task.id !== id));
    } else {
      alert("Error Deleting This Task");
    }
  };

  const addTask = async task => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const clickBtn = () => {
    console.log("clicked button");
  };

  useEffect(() => {
    (async function () {
      const tasks = await getTasks();
      setTasks(tasks);
    })();
  }, []);

  return (
    <div className="App">
      <Header title="myApp" />
      <Button color="success" text="go to apps" onClick={clickBtn} />
      <Tasks tasks={tasks} onDelete={removeTask} />
    </div>
  );
};

export default App;
