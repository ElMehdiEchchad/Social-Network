import React, { Component } from 'react';
import "./home.css";
import logo from "./logo.png";


export default class Home extends Component {

    render() {
      return (
        <div className="Home">
          <div className="Main">


            <div className="sideBar">
              <div className="logo">
                <a href="#"><img src={logo} alt="logo"/></a>
              </div>
              <div className="InfoBar">
                
              </div>
            </div>



            <div className="mainArea">
              mainArea
            </div>

            <div className="leftSideBar">
              leftSideBar
            </div>
          </div>
       
       </div>
      );
    }
  }