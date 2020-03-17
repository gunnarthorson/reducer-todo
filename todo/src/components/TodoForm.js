import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/titleReducer";
import TodoList from "./TodoList";

export default function TodoForm() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

  return (
    <div>
      <div>
      <h1>Add to list</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="title-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
          <button>Add Todo</button>
        </form>
      </div>
      <div>
        
        {state.map(item => (
          <TodoList
            todo={item.todo}
            key={item.id}
            completed={item.completed}
            id={item.id}
            dispatch={dispatch}
          />
        ))}
      </div>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR_COMPLETED" });
        }}
      >
        Remove Selected
      </button>
    </div>
  );
}