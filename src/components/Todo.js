import React from "react";
import TodoItems from "./TodoItems";

const Todo = ({ todo, markComplete, removeId }) => {
  return (
    <>
      {todo.map((t) => (
        <TodoItems
          key={t.id}
          todo={t}
          markComplete={markComplete}
          removeId={removeId}
        />
      ))}
    </>
  );
};

export default Todo;
