import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink className="logo" to="">
          LOGO
        </NavLink>
        <NavLink className="link" to="">
          Blog
        </NavLink>
        <NavLink className="link" to="">
          About
        </NavLink>
        <NavLink className="link" to="./PostsPreview">
          All posts
        </NavLink>
      </nav>
    </div>
  );
};
