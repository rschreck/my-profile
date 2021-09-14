import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export function Navbar({ title = "My default", icon = "fas fa-user" }) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/create-user">Create User</Link>
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "My Profile",
  icon: "fas fa-user",
};
