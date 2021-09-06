import React from "react";
import PropTypes from "prop-types";
export function Navbar({ title = "My default", icon = "fas fa-user" }) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
