import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Input,  Button , Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux' ;
import {getUser , updateUser} from '../../actions/itemActions';

import { ImagePicker } from 'react-file-picker'

 class AboutmeFriend extends React.Component{
   
  constructor(props) {
    super(props);
   

    var birth ;
    

    this.state = {
      Firstname: this.props.firstName ,
      Lastname:this.props.lastName,
      Birthday:this.props.birthDay,
      Email :this.props.email ,
    

  }


}

 

 

 
  
  render(){
   
  
    
   

   var brirth , month , day , year ; 

    
       brirth =new Date(this.props.birthDay) ;
       month = brirth.getUTCMonth() + 1; //months from 1-12
       day = brirth.getUTCDate();
       year =brirth.getUTCFullYear();
   
  

    var newdate =day+ "-" + month + "-" +year ;


      return (
 <div>
    
 <Form>
    
 <Form.Group widths='equal'>
      <Form.Field
        id='first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        value={this.props.firstName }
        
      />
      <Form.Field
        id='last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        value={this.props.lastName }
     
      />
      
     
    </Form.Group>
    
    
    <Form.Group widths='equal'> 
    <Form.Field
      id='email'
      control={Input}
      label='Email'
      placeholder='joe@gmail.com'
      value={this.props.email}
    
    />

    <Form.Field
        id='form-input-control-Birthday-Date'
        control={Input}
        label='Birthday Date'
        placeholder='Birthday Date'
        value={newdate}
      >
        
      </Form.Field>
    
      </Form.Group>
     
  
  </Form>


  


  </div>   
      
      );
  }
    }

  const mapStateToProps = (state) => ({
      users : state.users
  });

  export default connect(mapStateToProps, {getUser ,updateUser})(AboutmeFriend) ;
  

 