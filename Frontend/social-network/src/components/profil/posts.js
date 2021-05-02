import React, { useState } from 'react';
import { Card , Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';

import { Container , Divider  } from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'

import Feed from '../../components/Feed' ;
export default function Posts() {
   
 
      return (
         
      <Container style={{ overflowY:"scroll" , width: '60%'  , height : '45%' , position: 'absolute', left: '50%', top: '92%',
      transform: 'translate(-50%, -90%)',  backgroundColor :"white" }}>
      <Feed style={{ width :'70%'}}/>
      </Container>


    
      );
    }
  

 