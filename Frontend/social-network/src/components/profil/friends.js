import React from 'react';
//import Grid from '@material-ui/core/Grid';
import { Card , Button} from 'react-bootstrap';
import Avatar from "../profil/ava1.png";
import Ava from '@material-ui/core/Avatar';
import { BiMessageDots , BiTrash} from "react-icons/bi";
import {Row} from 'react-bootstrap';
import { Grid} from 'semantic-ui-react'
export default function friends() {
 

  return (
  <Grid stackable columns={3} style={{overflowY:"scroll", width: '60%'  , height : '45%' , position: 'absolute', left: '50%', top: '90%',
  transform: 'translate(-50%, -90%)', alignItems:"center" , backgroundColor:"white" , padding :"2%"}} >
  <Grid.Column>
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
  </Grid.Column>
  <Grid.Column>
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
  </Grid.Column>
  <Grid.Column>
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
  </Grid.Column>
  <Grid.Column>
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
  </Grid.Column>
  <Grid.Column>
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
  </Grid.Column>
  <Grid.Column>
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
  </Grid.Column>
  <Grid.Column>
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
  </Grid.Column>
  <div style ={{marginTop:"35%" , marginLeft :"10%"}}>
  <Button style={{ color: "white" , backgroundColor :"#F05945"}}>Add new friends</Button>
  </div>
</Grid>


  );
}
