import React, { useState } from 'react';
import { Card , Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux' ;

import { Container , Divider  } from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'

import Post from '../../components/main/post' ;
class Posts  extends React.Component {
   
      render(){
      return (
         
      <Container >
      <Post style={{ width :'70%'}}/>
      </Container>


    
      );

      }
    }


    export default connect(null, {})(Posts) ;
  

 