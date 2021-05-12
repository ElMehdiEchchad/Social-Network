import { React, useRef, useState, Component, withRouter } from 'react';
//import Grid from '@material-ui/core/Grid';
import { Card } from 'react-bootstrap';
import Avatar from "../profil/ava2.jpg";
import Ava from '@material-ui/core/Avatar';
import { BiMessageDots, BiTrash, BiUserPlus } from "react-icons/bi";
import { Row } from 'react-bootstrap';
import { Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import ScrollDialog from '../profil/Dialog'
import ScrollDialog2 from '../profil/Dialog-non-friend'
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';

//added by lkhadir
import { Redirect } from 'react-router-dom';
import Chat from "../chat/chat";


import { getfriends, getAllUsers, getUser, addfriend, removefriend } from '../../actions/itemActions';
import { GiKlingon } from 'react-icons/gi';
import aboutme from './aboutme';

class Friends extends Component {

   constructor(props) {
      super(props);
      this.props.getfriends(this.props.id);
      this.props.getAllUsers();
      this.props.getUser(this.props.id);
      //this.redirectTochat = this.redirectTochat.bind(this);
      this.state = {
         toChat: false,
         id: 0
      }

   }

   //added by lkhadir
   redirectTochat(id) {
      { console.log("redirecting : " + id) }
      this.setState(() => ({
         toChat: true,
         id: id
      }))
   }



   render() {
      const { users } = this.props.users
      const { friends } = this.props.users
      const { user } = this.props.users
      var listfriends = []
      if (friends[0].friends) {
         friends[0].friends.map(({ _id }) => (
            listfriends.push(_id)
         ));
      }
      console.log(listfriends)
      console.log(user[0])

      if (this.state.toChat === true) {
         return (
            <Redirect to="/chat" />
         )
         //to={{pathname: '/chat', state: { id: this.state.id }}}
      }


      if (typeof friends[0].friends === 'undefined' && typeof users[0] !== 'undefined' && users[0].length > 0) {
         return (
            <div>
               <h1 style={{ color: "#F05945", padding: "3%" }}> ADD Friends </h1>
               <Grid stackable columns={2} style={{ marginTop: "4%", marginBottom: "5%" }} >
                  {users[0].filter(item => item._id !== this.props.id).map(({ firstName, lastName, email, birthDay, _id }) => (
                     <Grid.Column>
                        <Card style={{ alignItems: "center" }} >
                           <ScrollDialog2 email={email} firstName={firstName} lastName={lastName} birthDay={birthDay} />
                           <Card.Body >
                              <Card.Title><h4 > {firstName + lastName} </h4></Card.Title>
                              <Card.Text> <h5>{email}</h5> </Card.Text>
                              <Row style={{ marginLeft: "15%" }} >
                                 <Button style={{ backgroundColor: "#5EAAA8" }} onClick={() => { const friend = { id_friend: _id }; this.props.addfriend(this.props.id, friend); window.location.reload() }} ><BiUserPlus /> </Button>
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



      if (friends[0].friends && typeof users[0] !== 'undefined' && users[0].length > 0 ) {
         return (
            <div>
               <h1 style={{ color: "#F05945", padding: "3%" }}> My Friends </h1>
               <Grid stackable columns={2} style={{ marginTop: "4%", marginBottom: "5%" }} >
                  {users[0].filter(item => item._id !== this.props.id && listfriends.includes(item._id)).map(({ firstName, lastName, email, birthDay, _id, profileImage }) => (
                     <Grid.Column>
                        <Card style={{ alignItems: "center" }} >
                           <ScrollDialog
                              email={email}
                              firstName={firstName}
                              lastName={lastName}
                              birthDay={birthDay}
                              id={_id}
                              profileImage={typeof profileImage !== 'undefined' &&  user[0].profileImage!== ''?`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(profileImage.data.data)))}`:Avatar} />
                           <Card.Body >
                              <Card.Title style={{ marginLeft: "15%" }}><h4 > {firstName + " " + lastName} </h4></Card.Title>
                              <Card.Text> <h5>{email}</h5> </Card.Text>
                              <Row >
                                 <Button size='mini' style={{ backgroundColor: "#5EAAA8", marginLeft: "15%" }} onClick={() => { this.redirectTochat() }}><BiMessageDots /> </Button>
                                 <Button size='mini' style={{ backgroundColor: "#F05945" }} onClick={() => { this.props.removefriend(this.props.id, _id); window.location.reload() }} ><BiTrash /> </Button>
                              </Row>
                           </Card.Body>
                        </Card>
                     </Grid.Column>


                  )
                  )}
               </Grid>
               <h1 style={{ color: "#F05945", padding: "3%" }}> ADD Friends </h1>
               <Grid stackable columns={2} style={{ marginTop: "4%", marginBottom: "5%" }} >
                  {users[0].filter(item => item._id !== this.props.id && !listfriends.includes(item._id)).map(({ firstName, lastName, email, birthDay, _id,profileImage }) => (
                     <Grid.Column>
                        <Card style={{ alignItems: "center" }} >
                           <ScrollDialog2 
                           email={email}
                           firstName={firstName}
                           lastName={lastName}
                           birthDay={birthDay} 
                           id={_id}
                           profileImage={typeof profileImage !== 'undefined' &&  user[0].profileImage!== ''?`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(profileImage.data.data)))}`:Avatar}  />
                           <Card.Body >
                              <Card.Title><h4 > {firstName + lastName} </h4></Card.Title>
                              <Card.Text> <h5>{email}</h5> </Card.Text>
                              <Row style={{ marginLeft: "15%" }} >
                                 <Button size='medium' style={{ backgroundColor: "#5EAAA8" }} onClick={() => { const friend = { id_friend: _id }; this.props.addfriend(this.props.id, friend); window.location.reload() }} ><BiUserPlus /> </Button>
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
      else {
         return (
            <div >
               <h2>Loading </h2>
            </div>
         );



      }

   }
}

const mapStateToProps = (state) => ({
   users: state.users
});

//export default withRouter(Friends);
export default connect(mapStateToProps, { getfriends, getAllUsers, getUser, addfriend, removefriend })(Friends);
// export default compose(
//    withRouter,
//    connect(mapStateToProps, { getfriends, getAllUsers, getUser, addfriend, removefriend })
//    )(Friends)