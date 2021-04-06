import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

export default class Profilcard extends Component {

    render() {
      return (
        <div >
         <Card style={{ width: '30%'  , height : '40%' , marginTop :'10%'}}>
         <Card.Img variant="top" src="70292.jpg" />
           <Card.Body>
            <div style={{ textAlign :'center'}}>
              <Card.Title>Salma Chana</Card.Title>
              <Card.Text> salma@gmail.com</Card.Text>
            </div>
            <br/>
            <Divider/>
            <br/>
            <div>
            <Link to="/About" className="nav-link"> <Card.Text> About</Card.Text> </Link>
            <Link to="/Posts" className="nav-link">  <Card.Text> Posts</Card.Text> </Link>
            <Link to="/Friends" className="nav-link"> <Card.Text> Friends</Card.Text> </Link>
            </div>
           </Card.Body>
        </Card>
      </div>
      );
    }
  }