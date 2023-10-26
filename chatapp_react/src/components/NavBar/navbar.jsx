import React from "react";
import { useState } from "react";
import "./navbar.css";

function Navbar({ users, curUser, setCurUser }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="../src/assets/icon.png" alt="Crazy Convo Logo" />
        <h1>Crazy Convo</h1>
      </div>
      <div className="navbar-right">
        <a onClick={() => setShowDropdown(!showDropdown)}>{curUser.userName}</a>
        {showDropdown && (
          <div className="navbar-dropdown">
            {users.map((u) => (
              <a
                key={u.userId}
                onClick={() => {
                  setCurUser(u);
                  setShowDropdown(false);
                }}
              >
                {"Hi!! " + u.userName}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
