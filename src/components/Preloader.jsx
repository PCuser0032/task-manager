import React from "react";
import "../css/preloader.css"
import spinner from "../img/spinner.svg"

function Preloader() {
  return <div className="preloader">
    <img src={spinner} alt="preloader image"></img>
  </div>;
}

export default Preloader;