import React from "react";
import "../css/user.css";

function User() {
  return (
    <div className="user">
      <img
        src="https://mobimg.b-cdn.net/v3/fetch/04/0428cca438b34255ebecfea6739a3597.jpeg?h=900&r=0.5"
        alt="User img"
        className="user-img"
      />
      <div className="username">username</div>
    </div>
  );
}

export default User;
