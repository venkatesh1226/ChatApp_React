import React from "react";
import "./bubble.css";
const Bubble = ({ message, isMine }) => {
  return (
    <div className={`${isMine ? "bubble align-left" : "bubble align-right"}`}>
      <div>
        <h3>{message.sender}</h3>
        <p>{message}</p>
        <span>{message.time}</span>
      </div>
    </div>
  );
};

export default Bubble;
