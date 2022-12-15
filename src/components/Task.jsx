import React from "react";
import "../css/task.css";

function Task({ description, taskIndex, deleteTask, editTask, completeTask }) {
  return (
    // <div className="task" draggable={true}>
    <div className="task">
      <div className="task-description">{description}</div>
      <div className="task-options">
        <button
          type="button"
          className="option-button option-button--delete"
          onClick={() => deleteTask(taskIndex)}
        >
          {/* delete */}
        </button>
        <button
          type="button"
          className="option-button option-button--edit"
          onClick={() => editTask(taskIndex)}
        >
          {/* edit */}
        </button>
        <button
          type="button"
          className="option-button option-button--complete"
          onClick={() => completeTask(taskIndex)}
        >
          {/* edit */}
        </button>
      </div>
    </div>
  );
}

export default Task;
