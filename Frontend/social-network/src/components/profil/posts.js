import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



export default function Posts() {
   
  
 
      return (
        <Card style={{ width: '60%'  , height : '40%' , position: 'absolute', left: '50%', top: '85%',
        transform: 'translate(-50%, -90%)', alignItems:"center"}}>
        <Card.Body>
          <Card.Title>First post</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      );
    }
  

 