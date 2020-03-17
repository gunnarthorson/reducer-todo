import React from "react";

export default function TodoList(props) {
  console.log("single props", props);
  return (
    <div
      className={`todo${props.completed ? " completed" : ""}`}
      onClick={() =>
        props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id })
      }
    >
      <p>{props.todo}</p>
    </div>
  );
}