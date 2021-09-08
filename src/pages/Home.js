import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { Users } from "../components/users/users.jsx";

function Home() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export { Home };
