import React, { Component } from 'react';
import "./home.css";
import SideNav from '../components/SideNav';




class Home extends Component {
  render(){
  return(
   <div className="Home">
        <SideNav />
    </div>

  );
  }
}

export default Home;