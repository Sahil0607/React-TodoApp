import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Layout/Header";
import AddTodo from "./components/AddTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((resp) => setTodo(resp.data));
  }, []);

  const markComplete = (id) => {
    setTodo((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeTitle = (id) => {
    setTodo((prev) => prev.filter((t) => t.id !== id));
  };

  const addTitle = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", newTodo)
      .then((resp) => setTodo((prev) => [...prev, resp.data]));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTitle} />
                <Todo
                  todo={todo}
                  removeId={removeTitle}
                  markComplete={markComplete}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
