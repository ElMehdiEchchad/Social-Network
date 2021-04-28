import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';


export default function Aboutme() {
   
  const [startDate, setStartDate] = useState(new Date());
  
 
      return (
    
 <Form style={{ width: '60%'  , height :"45%" ,overflowY:"scroll", position: 'absolute', left: '50%', top: '90%',
        transform: 'translate(-50%, -90%)', backgroundColor :"white" , padding: "2%"}}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        id='form-input-control-Birthday-Date'
        control={Input}
        label='Birthday Date'
        placeholder='Birthday Date'
      >
       <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </Form.Field>
     
    </Form.Group>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
    />
     <Form.Field
      id='form-input-control-error-password'
      control={Input}
      label='Enter Password'
      type='password'
      placeholder='password'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      style={{ marginLeft:"89%" , color: "white" , backgroundColor :"#F05945"}}
    />
  </Form>
      
      );
    }
  

 