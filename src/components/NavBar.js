import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink className="link" to="students">
          Students
        </NavLink>
        <NavLink className="link" to="results">
          Student Results
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
