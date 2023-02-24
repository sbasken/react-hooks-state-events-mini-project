import React from "react";

function Task({ category, text, onDeleteTask }) {
  
  return (
    <div key={text} className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button id={text} className="delete" onClick={onDeleteTask}>X</button>
    </div>
  );
}

export default Task;
