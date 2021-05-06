import {React , useRef , useState , Component } from 'react';
//import Grid from '@material-ui/core/Grid';
import { Card } from 'react-bootstrap';
import Avatar from "../profil/ava1.png";
import Ava from '@material-ui/core/Avatar';
import { BiMessageDots , BiTrash , BiUserCircle ,BiUserPlus} from "react-icons/bi";
import {Row} from 'react-bootstrap';
import { Grid  , Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import ScrollDialog from '../profil/Dialog'
import {connect} from 'react-redux' ;
import { Divider } from '@material-ui/core';

import {getfriends} from '../../actions/itemActions';
import { GiKlingon } from 'react-icons/gi';

 class Friends extends Component{

   constructor(props) {
      super(props);
    
    }
   componentDidMount() {
      this.props.getfriends(this.props.id);

     }
   render() {
    
      const {users} = this.props.users;
   

  return (
  <div>
  <h1 style={{ color :"#F05945" , padding:"3%"}}> My Friends + {this.props.id}</h1>
  <Grid stackable columns={3} style={{marginTop :"4%" , marginBottom:"5%" }} >
  { users[0].friends.map( ({firstName , lastName , email}) => (
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <ScrollDialog />
           <Card.Body>             
              <h4 > {firstName + lastName} </h4>
              <h5>{email}</h5>
              <Row style={{padding:"3%"}}>
              <Button  style={{ backgroundColor :"#5EAAA8"}}><BiMessageDots/> </Button>
              <Button  style={{  backgroundColor :"#F05945"}}><BiTrash/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>
  )
  )}
  
</Grid>
<div style ={{marginTop:"5%" , marginLeft :"50%"}}>  
    
   </div>
</div>

  );
}
}

const mapStateToProps = (state) => ({
   users : state.users
});

export default connect(mapStateToProps, {getfriends})(Friends) ;

