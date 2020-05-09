import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "Routes/Home";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Redirect from="*" to="/" />
  </Router>
);
