import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = props => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/friends">Friends</NavLink>
    </nav>
  );
};

export default NavBar;
