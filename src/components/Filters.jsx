import React from "react";
import "../css/filters.css";

function Filters() {
  return (
    <div className="filters">
      <div className="filters__inner">
        <button type="button" className="filters__button">
          filter one
        </button>
        <button type="button" className="filters__button">
          filter two
        </button>
        {/* <button type="button" className="filters__button"></button> */}
      </div>
      <div className="calendar-options">
        <button
          type="button"
          className="calendar-options__button calendar-options__button--arrow-left"
        ></button>
        <input
          type="date"
          className="calendar-options__button calendar-options__button--calendar"
        />
        <button
          type="button"
          className="calendar-options__button calendar-options__button--arrow-right"
        ></button>
      </div>
    </div>
  );
}

export default Filters;
