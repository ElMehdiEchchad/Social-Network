import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Ava from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "../profil/ava1.png";
import {  withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux' ;
import {getUsers } from '../../actions/itemActions';
import Aboutme from '../profil/aboutme';
import Friends from '../profil/friends';
import Posts from '../profil/posts';
import {Row } from 'react-bootstrap';
import { Divider, Tab } from 'semantic-ui-react'



import AuthContext from '../../contexts/AuthContext'
import {useContext} from 'react' ;


export default function Profilcard(){
    
   const {auth} = useContext(AuthContext) ;
   const id = auth.userData.id ; 
  
   console.log("Hi"+id) ;

    const panes = [
    {
      menuItem: { key: 'users',  content: 'About' },
      render: () => <Tab.Pane><Aboutme id={id}></Aboutme></Tab.Pane>,
    },
   /* {
      menuItem: { key: 'friends', icon: 'users' , content :'friends' },
      render: () => <Tab.Pane><Friends/></Tab.Pane>,
    },*/
    {
      menuItem: { key: 'posts', content :'Posts' },
      render: () => <Tab.Pane><Posts/></Tab.Pane>,
    },
  ]
  
   
      return (
        <div >
         <Card >
           <Ava  src={Avatar} style={{ height: '140px', width: '140px'  , position: 'absolute', left: '50%', top: '70%',
        transform: 'translate(-50%, -90%)', alignItems:"center" , marginBottom :"10%"}}/>
           <Card.Body style={{  marginTop :"20%" , transform: 'translate(40%, 50%)' , color :"white" }}>
              <Card.Title>firstname  and lastname</Card.Title>
              <Card.Text>user email</Card.Text>
              <br></br> 
           </Card.Body>
        </Card>

      
        <Tab panes={panes} style={{marginTop :"5%"}} />
       

        
      </div>
      );
    
}


 