import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import particlesConfig from "./config/configParticles";
import Header from "./components/Home/Header/Header";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/">
        <div>
      <div className="App" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "fixed" }}>
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Home></Home>
        
      </div>
    </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
