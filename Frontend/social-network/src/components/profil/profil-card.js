import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Ava from '@material-ui/core/Avatar';

import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import { getUser } from '../../actions/itemActions';
import Aboutme from '../profil/aboutme';
import Post from '../profil/posts';
import { Tab } from 'semantic-ui-react'
import styles from "../main/Sidebar.module.css";




class Profilcard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: null
    }

    this.props.getUser(this.props.id);


  }


  render() {

    const panes = [
      {
        menuItem: { key: 'users', content: 'About' },
        render: () => <Tab.Pane><Aboutme id={this.props.id}></Aboutme></Tab.Pane>,
      },
      {
        menuItem: { key: 'posts', content: 'Posts' },
        render: () => <Tab.Pane><Post id={this.props.id} /></Tab.Pane>,
      },
    ]

    // this is for get the image from user.profileImage
    const { user } = this.props.users;
    var base64String;
    if (typeof user[0].profileImage !== 'undefined' && user[0].profileImage !== '') {
      const arrayBuffer = user[0].profileImage.data.data
      base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
    }


    return (
      <div >
        <Card >
          <Ava src={`data:image/png;base64,${base64String}`}
            style={{
              height: '140px', width: '140px', position: 'absolute', left: '50%', top: '70%',
              transform: 'translate(-50%, -90%)', alignItems: "center", marginBottom: "10%"
            }} />
          <Card.Body style={{ marginTop: "20%", transform: 'translate(40%, 50%)', color: "white" }}>
            <Card.Title>firstname  and lastname</Card.Title>
            <Card.Text>user email</Card.Text>
            <br></br>
          </Card.Body>
        </Card>


        <Tab panes={panes} style={{ marginTop: "5%" }} />



      </div>
    );

  }


}

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps, { getUser })(Profilcard);