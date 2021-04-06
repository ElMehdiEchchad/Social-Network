import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Profil from "./pages/profil.js";
import Home from "./pages/home";
import Login from "./Login-signup/Login";
import Signup from "./Login-signup/Signup";
function App() {
  return (
    <Router>
      <div >
        <div class="container">
        <Route path="/" exact component={Home} />
        <Route path="/myprofil" component={Profil} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        </div>
      </div>
    </Router>
  );
}

export default App;