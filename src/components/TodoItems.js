import React from "react";

const TodoItems = ({ todo, markComplete, removeId }) => {
  const getStyle = () => ({
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.completed ? "line-through" : "none",
  });

  const removedTitle = () => ({
    background: "Tomato",
    padding: "7px",
    borderRadius: "10%",
    float: "right",
    marginRight: "20px",
    cursor: "pointer",
  });

  const { id, title } = todo;
  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={() => markComplete(id)} /> {title}
        <button style={removedTitle()} onClick={() => removeId(id)}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default TodoItems;
