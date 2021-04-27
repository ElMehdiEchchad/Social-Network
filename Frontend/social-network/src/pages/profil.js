import React, { Component } from 'react';
import Profilcard  from "../components/profil/profil-card";
import SideNav from '../components/SideNav';
import '../pages/home.css'

export default class Profil extends Component {

    render() {
      return (
        <div className="Home"
      >
        <SideNav />
        <Profilcard/>
        
      </div>
      );
    }
  }