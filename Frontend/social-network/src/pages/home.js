import React, { Component } from 'react';
import "./home.css";
import SideNav from '../components/SideNav';
import AddPost from '../components/AddPost';
import Feed from '../components/Feed';

function Home() {
  return(
   <div className="Home">
     <div className="Main">
       <div className="SideBarArea">
          <SideNav />
        </div>


        <div className="MainArea">
          <div className="FeedArea">
            <AddPost />
            <Feed />
          </div>
         
        </div>

        <div className="RightArea">
        </div>
        </div>
    </div>

  );
}

export default Home;