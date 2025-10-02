import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const changeInput = (event) => {
    setTitle(event.target.value);
  };

  const submitValue = (event) => {
    event.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <form style={{ display: "flex" }} onSubmit={submitValue}>
      <input
        type="text"
        name="title"
        placeholder="Enter Title"
        style={{ flex: "10", padding: "5px" }}
        onChange={changeInput}
        value={title}
      />
      <input type="submit" value="Submit" style={{ flex: "1" }} />
    </form>
  );
};

export default AddTodo;
