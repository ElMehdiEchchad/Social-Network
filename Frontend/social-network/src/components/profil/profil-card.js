import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Ava from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "../profil/ava1.png";
import {  withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux' ;
import {getUsers } from '../../actions/itemActions';
import Aboutme from '../profil/aboutme';
import Friends from '../profil/friends';
import Posts from '../profil/posts';

import { Label, Menu, Tab } from 'semantic-ui-react'

class Profilcard extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }
   
  render() {

   const {users} = this.props.users;

  const   StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.9)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const panes = [
    {
      menuItem: { key: 'users',  content: 'About me' },
      render: () => <Tab.Pane><Aboutme></Aboutme></Tab.Pane>,
    },
    {
      menuItem: { key: 'friends', icon: 'users' , content :'friends' },
      render: () => <Tab.Pane><Friends/></Tab.Pane>,
    },
    {
      menuItem: { key: 'posts', content :'Posts' },
      render: () => <Tab.Pane><Posts/></Tab.Pane>,
    },
  ]
  
   
      return (
        <div >
         <Card style={{ width: '80%'  , height : '35%' , position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -90%)', alignItems:"center" }}>
           <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                <Ava  src={Avatar} style={{ height: '150px', width: '150px' }}/>
           </StyledBadge>

           <Card.Body>
            <div style={{ textAlign :'center' , marginBottom :"7%"}}>
              <Card.Title>{users[0].firstName +' '+ users[0].lastName}</Card.Title>
              <Card.Text>{users[0].email}</Card.Text>
            </div>  
              
           
            <br/>
           </Card.Body>
        </Card>

      
        <Tab panes={panes}  style={{ width: '80%'  , height :"55%" ,overflowY:"scroll", position: 'absolute', left: '50%', top: '95%',
        transform: 'translate(-50%, -90%)', backgroundColor :"white" , padding: "2%" }}/>
       

        
      </div>
      );
    }
}

const mapStateToProps = (state) => ({
  users : state.users
});

export default connect(mapStateToProps, {getUsers})(Profilcard) ;

 