import React, { useState } from 'react';
import { Card , Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';

import { Container , Divider  } from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'


export default function Posts() {
   
 
      return (
         
      <Container style={{ overflowY:"scroll" , width: '60%'  , height : '45%' , position: 'absolute', left: '50%', top: '92%',
      transform: 'translate(-50%, -90%)', alignItems:"center" , backgroundColor :"white" , padding :"2%"}}>
        <Card style={{marginBottom :'2%'}}>
        <Card.Body>
          <Row style ={{paddingLeft :"2%"}}>
          <Card.Title>First post</Card.Title>
          <Button style ={{marginLeft :"76%" , marginBottom :"1%" ,color: "white" , backgroundColor :"#F05945"}}  >
            Delete
          </Button></Row>
          <Divider/>
          <br/>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content.
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          
          <Button as='div' labelPosition='right' style ={{marginLeft :"83%"}} >
               <Label as='a' basic pointing='left'> 2,048 </Label>
               <Button icon  >
               <Icon name='heart' />
                Like
                </Button>
          </Button>
        
           
        </Card.Body>
      </Card>
      <Card >
        <Card.Body>
          <Row style ={{paddingLeft :"2%"}}>
          <Card.Title>First post</Card.Title>
          <Button style ={{marginLeft :"76%" , marginBottom :"1%" ,color: "white" , backgroundColor :"#F05945"}}  >
            Delete
          </Button></Row>
          <Divider/>
          <br/>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          
          <Button as='div' labelPosition='right' style ={{marginLeft :"83%"}} >
               <Label as='a' basic pointing='left'> 890 </Label>
               <Button icon  >
               <Icon name='heart' />
                Like
                </Button>
          </Button>
        
           
        </Card.Body>
      </Card>
      </Container>


    
      );
    }
  

 