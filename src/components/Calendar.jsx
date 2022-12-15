import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Column from "./Column";
import "../css/calendar.css";
import Preloader from "./Preloader";

function Calendar() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [columns, setColumns] = React.useState([]);

  // const ["date", set"date"] = React.useState("");

  // const [taskToDelete, setTaskToDelete] = React.useState(null);
  // const taskDeleteHandler = () => {};

  // const [taskToEdit, setTaskToEdit] = React.useState(null);
  // const taskEditHandler = () => {};

  // const [doneTask, setDoneTask] = React.useState(null);
  // const taskDoneHandler = () => {};

  React.useEffect(() => {
    const apiUrl = "https://6399a22f29930e2bb3d9c9ba.mockapi.io/api/tasks";

    axios
      .get(apiUrl)
      .then((resolve) => {
        const data = resolve.data;

        setColumns(
          data.map((day) => (
            <Column key={uuidv4(day.id)} date={day.date} tasks={day.tasks} />
          ))
        );

        setIsLoading(!isLoading);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="calendar-wrapper">
      {isLoading && <Preloader />}
      {/* {EditModalWindowIsActive && <EditModalWindow />} */}
      {/* {DeleteModalWindowIsActive && <DeleteModalWindow />} */}
      <div className="calendar">{columns}</div>
    </div>
  );
}

export default Calendar;
