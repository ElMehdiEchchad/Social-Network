import React, { Component } from 'react';
import "./home.css";
import SideNav from '../components/SideNav';
import AddPost from '../components/AddPost';

function Home() {
  return(
   <div className="App">
     <div className="Main">
       <div className="SideBarArea">
          <SideNav />
        </div>


        <div className="MainArea">
          <AddPost />
        </div>



        <div className="RightArea">
          RightArea
        </div>
        </div>
    </div>

  );
}

export default Home;