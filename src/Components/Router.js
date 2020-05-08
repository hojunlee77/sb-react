import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "Routes/Home";
import AboutUs from "Routes/AboutUs";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={AboutUs} />
    <Redirect from="*" to="/" />
  </Router>
);
