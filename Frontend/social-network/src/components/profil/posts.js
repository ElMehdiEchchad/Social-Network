import React, { useState } from 'react';
import { Card , Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';

import { Container , Divider  } from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'

import Post from '../../components/main/post' ;
export default function Posts() {
   
 
      return (
         
      <Container >
      <Post style={{ width :'70%'}}/>
      </Container>


    
      );
    }
  

 