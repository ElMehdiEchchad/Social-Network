import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from 'react-bootstrap';


export default function friends() {
 

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper>
           <Card style={{ padding : '10%'}}>  
              <Card.Title>Friend #</Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk 
             </Card.Text>
             </Card></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
              <Card style={{ padding : '10%'}}> 
              <Card.Title>Friend #</Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk 
             </Card.Text>
             </Card></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
              <Card style={{ padding : '10%'}}> 
              <Card.Title>Friend #</Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk 
             </Card.Text>
             </Card></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div >
      <Grid container spacing={1} style={{ width: '60%'  , height : '40%' , position: 'absolute', left: '51%', top: '85%',
        transform: 'translate(-50%, -90%)', alignItems:"center"}}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
