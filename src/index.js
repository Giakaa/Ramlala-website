import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Minting from "./views/minting";
import Home from "./views/home";
import Roadmap from "./views/roadmap";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Minting} exact path="/minting" />
        <Route component={Home} exact path="/" />
        <Route component={Roadmap} exact path="/roadmap" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
