import React from "react";
import "../css/task.css";

function Task(props) {
  return (
    <div className="task" draggable={true}>
      <div className="task-description">{props.description}</div>
      <div className="task-options">
        <button type="button" className="option-button option-button--delete">
          {/* delete */}
        </button>
        <button type="button" className="option-button option-button--edit">
          {/* edit */}
        </button>
        <button type="button" className="option-button option-button--done">
          {/* edit */}
        </button>
      </div>
    </div>
  );
}

export default Task;
