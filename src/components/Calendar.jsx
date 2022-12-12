import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Column from "./Column";
import "../css/calendar.css";

function Calendar() {
  const [columns, setColumns] = React.useState([]);

  // const [date, setDate] = React.useState("");

  const [taskToDelete, setTaskToDelete] = React.useState(null);
  const taskDeleteHandler = () => {};

  const [taskToEdit, setTaskToEdit] = React.useState(null);
  const taskEditHandler = () => {};

  const [doneTask, setDoneTask] = React.useState(null);
  const taskDoneHandler = () => {};

  useEffect(() => {
    const days = [
      {
        dayId: 1,
        date: "Monday, 5 Dec",
        tasks: [
          {
            taskId: 1,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 2,
            description: "Ipsum dolor sit  amet"
          },
          {
            taskId: 3,
            description: "Sit amet lorem"
          }
        ]
      },
      {
        dayId: 2,
        date: "Tuesday, 6 Dec",
        tasks: [
          {
            taskId: 1,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 2,
            description: "Ipsum dolor sit  amet"
          }
        ]
      },
      {
        dayId: 3,
        date: "Wednesday, 7 Dec",
        tasks: [
          {
            taskId: 1,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 2,
            description: "Ipsum dolor sit  amet"
          },
          {
            taskId: 3,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 4,
            description: "Ipsum dolor sit  amet"
          }
        ]
      },
      {
        dayId: 4,
        date: "Thursday, 8 Dec",
        tasks: [
          {
            taskId: 1,
            description: "Lorem ipsum dolor"
          }
        ]
      },
      {
        dayId: 5,
        date: "Friday, 9 Dec",
        tasks: [
          {
            taskId: 1,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 2,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 3,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 4,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 5,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 6,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 7,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 8,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 9,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 10,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 11,
            description: "Lorem ipsum dolor"
          }
        ]
      },
      {
        dayId: 6,
        date: "Saturday, 10 Dec",
        tasks: [
          {
            taskId: 1,
            description: "Lorem ipsum dolor"
          },
          {
            taskId: 2,
            description: "Dolor lorem"
          }
        ]
      },
      {
        dayId: 7,
        date: "Sunday, 11 Dec",
        tasks: [
          {
            taskId: 1,
            description: "Lorem ipsum dolor"
          }
        ]
      }
    ];

    setColumns(
      days.map((day) => (
        <Column key={uuidv4(day.id)} date={day.date} tasks={day.tasks} />
      ))
    );
  }, []);

  return (
    <div className="calendar-wrapper">
      <div className="calendar">{columns}</div>
    </div>
  );
}

export default Calendar;
