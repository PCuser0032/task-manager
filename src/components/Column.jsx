import React from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import "../css/column.css";

function Column(props) {
  const [taskList, setTaskList] = React.useState([]);

  const resetTextarea = () => {
    setCurrentValue("");
  };

  const keyDownHandler = (event) => {
    // if (event.key === "Enter") {
    if (event.keyCode === 13 && currentValue !== "") {
      addTask();
      resetTextarea();
      event.preventDefault();
    }
    if (event.keyCode === 13 && currentValue === "") {
      event.preventDefault();
    }
  };

  React.useEffect(() => {
    setTaskList(
      props.tasks.map((task, index) => (
        <Task
          key={task.taskId}
          taskIndex={index}
          description={task.description}
          deleteTask={deleteTask}
        />
      ))
    );
  }, [props.tasks]);

  const deleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);

    setTaskList(newTaskList);
  };

  const addTask = () => {
    const newTask = (
      <Task
        key={uuidv4(taskList.length + 1)}
        taskIndex={taskList.length}
        description={currentValue}
        deleteTask={deleteTask}
      />
    );

    console.log(taskList);
    setTaskList([...taskList, newTask]);
  };

  const textareaRef = React.useRef(null);
  const [currentValue, setCurrentValue] = React.useState("");

  const textareaHandler = (event) => {
    setCurrentValue(event.target.value);
  };

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
          onChange={textareaHandler}
          // onChange={(event) => setCurrentValue(event.target.value)}
          onKeyDown={keyDownHandler}
          value={currentValue}
          className="column__task-input"
          maxLength="128"
          placeholder="Enter task"
        ></textarea>
      </div>
      <div className="column__task-list">{taskList}</div>
    </div>
  );
}

export default Column;
