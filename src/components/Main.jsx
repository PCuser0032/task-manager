import React from "react";
import Calendar from "./Calendar";
import Filters from "./Filters";

function Main() {
  return (
    <main className="main">
      <Filters />
      <Calendar />
    </main>
  );
}

export default Main;
