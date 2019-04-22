import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className="ui inverted menu">
      <div className="header item">
        <h1>App</h1>
      </div>
      <div className="right menu">
        <NavLink activeClassName="active" className="item" to="/login">
          Login
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/protected">
          Protected
        </NavLink>
      </div>
    </div>
  );
};
