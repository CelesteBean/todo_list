import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInput, setListInput] = useState("");
  console.log("I'm alive");

  const handleAddTodo = () => {
    console.log("Hello Todo");
    if (headingInput.trim() != "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };

  const handleAddList = (index) => {
    if (listInput.trim() != "") {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInput);
      setTodos(newTodos);
      setListInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    console.log("Delete Todo");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleDeleteItem = (index, listIndex) => {
    console.log("Delete Item");
    const newTodos = [...todos];
    // newTodos.splice(index, 1);
    newTodos[index].lists.splice(listIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)} // Add onChange event handler to update heading
          />
          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button
                className="delete-button-heading"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete Heading
              </button>
            </div>
            <div>
              <ul>
                {todo.lists.map((list, listIndex) => (
                  <li key={listIndex} className="todo_inside_list">
                    <p>{list}</p>
                    <button
                      className="delete-button-heading"
                      onClick={() => handleDeleteItem(index, listIndex)}
                    >
                      Delete Item
                    </button>
                  </li>
                ))}
              </ul>
              <div className="add-list">
                <input
                  type="text"
                  className="list-input"
                  placeholder="Enter list item"
                  value={listInput}
                  onChange={(e) => setListInput(e.target.value)}
                />
                <button
                  className="add-list-button"
                  onClick={() => handleAddList(index)}
                >
                  Add List
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
