import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';

import { Container  } from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'

export default function Posts() {
   
 
      return (
         
      <Container style={{ overflowY:"scroll" , width: '60%'  , height : '40%' , position: 'absolute', left: '50%', top: '85%',
      transform: 'translate(-50%, -90%)', alignItems:"center"}}>
        <Card style={{marginBottom :'2%'}}>
        <Card.Body>
          <Card.Title>First post</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button as='div' labelPosition='right' >
               <Button icon  >
               <Icon name='heart' />
                Like
                </Button>
               <Label as='a' basic pointing='left'> 2,048 </Label>
            </Button>
           
        </Card.Body>
      </Card>
      <Card >
        <Card.Body>
          <Card.Title>Second post</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button as='div' labelPosition='right' >
               <Button icon  >
               <Icon name='heart' />
                Like
                </Button>
               <Label as='a' basic pointing='left'> 2,048 </Label>
         </Button>
        </Card.Body>
      </Card>
      </Container>


    
      );
    }
  

 