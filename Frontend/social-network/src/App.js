import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import Profil from "./pages/profil.js";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div >
        <div class="container">
        <Route path="/" exact component={Home} />
        <Route path="/myprofil" component={Profil} />
        </div>
      </div>
    </Router>
  );
}

export default App;