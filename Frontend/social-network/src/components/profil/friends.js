import {React , useRef , useState , Component } from 'react';
//import Grid from '@material-ui/core/Grid';
import { Card } from 'react-bootstrap';
import Avatar from "../profil/ava1.png";
import Ava from '@material-ui/core/Avatar';
import { BiMessageDots , BiTrash , BiUserPlus} from "react-icons/bi";
import {Row} from 'react-bootstrap';
import { Grid  , Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import ScrollDialog from '../profil/Dialog'
import {connect} from 'react-redux' ;
import { Divider } from '@material-ui/core';


import {getfriends , getAllUsers , getUser , addfriend , removefriend} from '../../actions/itemActions';
import { GiKlingon } from 'react-icons/gi';
import aboutme from './aboutme';

 class Friends extends Component{

   constructor(props) {
      super(props);
      this.props.getfriends(this.props.id);
      this.props.getAllUsers () ;
      this.props.getUser (this.props.id) ;
      const {friends} =this.props.users
      const {users} =this.props.users 
      const {user} =this.props.users 
      console.log (user[0])
    
    }



   render() {
   const {users} =this.props.users 
   const {friends} =this.props.users
   const {user} =this.props.users 
   var listfriends =[]
   if(friends[0].friends) {
      friends[0].friends.map( ({ _id}) => (
       listfriends.push(_id)
      ));
   }
   console.log(listfriends)


  
if (friends[0].friends && !users[0].firstName) {
  return (
  <div>
  <h1 style={{ color :"#F05945" , padding:"3%"}}> My Friends + {this.props.id}</h1>
  <Grid stackable columns={3} style={{marginTop :"4%" , marginBottom:"5%" }} >
  { users[0].filter(item =>item._id!==this.props.id && listfriends.includes(item._id)).map( ({firstName , lastName , email , birthDay ,_id}) => (
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <ScrollDialog email ={email} firstName={firstName} lastName ={lastName} birthDay ={birthDay}/>
           <Card.Body>             
              <Card.Title><h4 > {firstName + lastName} </h4></Card.Title>
              <Card.Text> <h5>{email}</h5> </Card.Text>
              <Row style={{padding:"3%"}}>
              <Button  style={{ backgroundColor :"#5EAAA8"}}><BiMessageDots/> </Button>
              <Button  style={{  backgroundColor :"#F05945"}} onClick={() => {  this.props.removefriend(this.props.id , _id) ; window.location.reload() }} ><BiTrash/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>

  
  )
  )}
</Grid>
<h1 style={{ color :"#F05945" , padding:"3%"}}> ALL users</h1>
  <Grid stackable columns={3} style={{marginTop :"4%" , marginBottom:"5%" }} >
  { users[0].filter(item =>item._id!==this.props.id && !listfriends.includes(item._id)).map( ({firstName , lastName , email , birthDay , _id}) => (
  <Grid.Column>
  <Card style={{ alignItems:"center"}} >
           <ScrollDialog email ={email} firstName={firstName} lastName ={lastName} birthDay={birthDay}/>
           <Card.Body >             
              <Card.Title><h4 > {firstName + lastName} </h4></Card.Title>
              <Card.Text> <h5>{email}</h5> </Card.Text>
              <Row style={{marginLeft :"10%"}} >
              <Button  style={{ backgroundColor :"#5EAAA8" }} onClick={() => { const friend = {id_friend : _id  }; this.props.addfriend(this.props.id ,friend ); window.location.reload()}} ><BiUserPlus/> </Button>
              </Row>
           </Card.Body>
        </Card>
  </Grid.Column>

  
  )
  )}
</Grid>
</div>

  );
}
else{
   return (
      <div >  
       <h2>Loading </h2>
   </div>
   )  ;

}

  

}
   
}

const mapStateToProps = (state) => ({
   users : state.users
});

export default connect(mapStateToProps, {getfriends , getAllUsers ,getUser , addfriend , removefriend})(Friends) ;

