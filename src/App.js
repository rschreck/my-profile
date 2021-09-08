import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Users } from "./components/users/users.jsx";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title=" My Profile Finder" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
