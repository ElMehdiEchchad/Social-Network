import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card , Button} from 'react-bootstrap';
import Avatar from "../profil/ava1.png";
import Ava from '@material-ui/core/Avatar';
import { Container  } from '@material-ui/core';
import { BiMessageDots , BiTrash} from "react-icons/bi";
import {Row} from 'react-bootstrap';

export default function friends() {
 

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <Card style={{ alignItems:"center" }} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button  style={{ marginLeft : "25%" , backgroundColor :"#5EAAA8"}}><BiMessageDots/> </Button>
              <Button  style={{ marginLeft : "5%" , backgroundColor :"#F05945"}}><BiTrash/> </Button>
              </Row>
           </Card.Body>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card style={{ alignItems:"center"}} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button  style={{ marginLeft : "25%" , backgroundColor :"#5EAAA8"}}><BiMessageDots/> </Button>
              <Button  style={{ marginLeft : "5%" , backgroundColor :"#F05945"}}><BiTrash/> </Button>
              </Row>
           </Card.Body>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card style={{ alignItems:"center"}} >
           <Ava  src={Avatar} style={{ height: '80px', width: '80px' }}/>
           <Card.Body>
              <Card.Title>Random friend</Card.Title>
              <Row>
              <Button  style={{ marginLeft : "25%" , backgroundColor :"#5EAAA8"}}><BiMessageDots/> </Button>
              <Button  style={{ marginLeft : "5%" , backgroundColor :"#F05945"}}><BiTrash/> </Button>
              </Row>
           </Card.Body>
        </Card>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div >
      <Container style={{overflowY:"scroll", width: '60%'  , height : '45%' , position: 'absolute', left: '50%', top: '90%',
        transform: 'translate(-50%, -90%)', alignItems:"center" , backgroundColor:"white" , padding :"2%"}} >
        
      <Grid container spacing={1}  >
        <Grid container item xs={12} spacing={4}>
          <FormRow  />
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <FormRow />
        </Grid>
      </Grid>

      <Button style={{marginTop:"5%" , marginLeft :"40%" ,color: "white" , backgroundColor :"#F05945"}}>Add new friends</Button>
      </Container>
    </div>
  );
}
