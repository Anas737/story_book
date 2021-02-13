import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Authentification from "../Authentification";
import React from "react";

function App(props) {
  React.useEffect(() => {}, []);

  return (
    <div className="App">
      <a href="http://localhost:5000/api/auth/google">Sign in with google</a>
      <Router>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
