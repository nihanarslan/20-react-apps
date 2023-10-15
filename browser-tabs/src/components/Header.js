import React from "react";
import Tab from "./Tab";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="tabs">
      <Tab id="tabhome">
        <NavLink to="/">Home</NavLink>
      </Tab>
      <Tab>
        <NavLink to="/about">About</NavLink>
      </Tab>
      <Tab>
        <NavLink to="/features">Feature</NavLink>
      </Tab>
    </div>
  );
}

export default Header;
