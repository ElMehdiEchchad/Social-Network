import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import Ava from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "../profil/ava1.png";
import {  withStyles } from '@material-ui/core/styles';

import Aboutme from '../profil/aboutme';
import friends from '../profil/friends';
import Posts from '../profil/posts';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Profilcard() {
   
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const   StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.9)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
 
      return (
        <div >
         <Card style={{ width: '60%'  , height : '40%' , position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -90%)', alignItems:"center"}}>
           <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                <Ava  src={Avatar} style={{ height: '150px', width: '150px' }}/>
           </StyledBadge>

           <Card.Body>
            <div style={{ textAlign :'center'}}>
              <Card.Title>Salma Chana</Card.Title>
              <Card.Text> salma@gmail.com</Card.Text>
            </div>
            <br/>
            <Divider/>

            <Paper square>
                <Tabs
               
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                 >
                   <Card.Link href="/myprofil" >  <Tab label="About me" /></Card.Link>
                   <Card.Link href="/myprofil/friends" >   <Tab label="My friends" /></Card.Link>
                   <Card.Link href="/myprofil/posts" >  <Tab label="Posts" /></Card.Link>
                </Tabs>
            </Paper>
            <br/>
           </Card.Body>
        </Card>

      
      <Router>
                <div >
                    <Route path="/myprofil" exact component={Aboutme} />
                    <Route path="/myprofil/friends" exact component={friends} />
                    <Route path="/myprofil/posts" exact component={Posts} />
                </div>
        </Router> 
        
      </div>
      );
    }
  

 