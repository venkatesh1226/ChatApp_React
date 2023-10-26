import React from "react";
import "./users.css";
export default function Users({ users, setChatWith }) {
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.userId}
          onClick={() => {
            setChatWith(user);
          }}
        >
          <h3> {user.userName} </h3>
        </li>
      ))}
    </ul>
  );
}
