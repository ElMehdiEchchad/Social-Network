import React, { Component } from 'react';
import Profilcard  from "../components/profil/profil-card";
import '../pages/profil.css'
import { BrowserRouter as Router, Route } from "react-router-dom";



export default class Profil extends Component {

    render() {
      return (
        <div className="Home" >       
        <Router>                             
                    <Route path="/myprofil" component={Profilcard} />               
        </Router>
        </div>
      );
    }
  }