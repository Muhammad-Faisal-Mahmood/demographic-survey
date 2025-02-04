import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import ImplicitBiasTest from "./containers/ImplicitBiasTest";
import DemographicInfo from "./containers/DemographicInfo";
import "./scss/global.scss";

export default function App() {
  return (
    <Router>
      <div className="nav-and-content">
        <Switch>
          <Route path={`/test/:testId`}>
            <ImplicitBiasTest />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <DemographicInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
