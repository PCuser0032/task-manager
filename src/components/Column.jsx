import React from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import "../css/column.css";

function Column(props) {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    setTasks(
      props.tasks.map((task) => (
        <Task key={uuidv4(task.taskId)} description={task.description} />
      ))
    );
  }, [props.tasks]);

  const textareaRef = React.useRef(null);
  const [currentValue, setCurrentValue] = React.useState("");

  React.useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);

  return (
    <div className="column">
      <div className="column__date">{props.date}</div>
      <div className="column__task-input-wrapper">
        <textarea
          ref={textareaRef}
          onChange={(event) => setCurrentValue(event.target.value)}
          value={currentValue}
          className="column__task-input"
          maxLength="128"
          placeholder="Enter task"
        ></textarea>
      </div>
      <div className="column__task-list">{tasks}</div>
    </div>
  );
}

export default Column;
