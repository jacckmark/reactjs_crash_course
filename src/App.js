import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import About from "./components/About";
import Shop from "./components/Shop";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

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

  useEffect(() => {
    (async function () {
      const tasks = await getTasks();
      setTasks(tasks);
    })();
  }, []);

  return (
    <div className="App">
      <Header title="myApp" />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/" render={() => <Tasks tasks={tasks} onDelete={removeTask} exact />} />
      </Switch>
    </div>
  );
};

export default App;
