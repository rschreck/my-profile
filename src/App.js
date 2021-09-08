import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import CreateUser from "./components/users/create-user";
import NotFound from "./components/pages/NotFound";
import ContactState from "./context/contact/contact-state";
function App() {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar title=" My Profile Finder" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/create-user" component={CreateUser} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
