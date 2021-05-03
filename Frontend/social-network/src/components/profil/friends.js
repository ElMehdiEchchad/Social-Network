import {React , useRef , useState , useEffect } from 'react';
//import Grid from '@material-ui/core/Grid';
import { Card , Button } from 'react-bootstrap';
import Avatar from "../profil/ava1.png";
import Ava from '@material-ui/core/Avatar';
import { BiMessageDots , BiTrash} from "react-icons/bi";
import {Row} from 'react-bootstrap';
import { Grid} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import ScrollDialog from '../profil/Dialog'
// dialog section



export default function Friends() {


  
 
  return (
  <Grid stackable columns={3}  >
  <Grid.Column>
  <Link to="/friendprofil">
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
        </Link>
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
  <div style ={{marginTop:"20%" , marginLeft :"10%"}}>  
    <ScrollDialog >Add new friends</ScrollDialog>
   </div>
</Grid>


  );
}
