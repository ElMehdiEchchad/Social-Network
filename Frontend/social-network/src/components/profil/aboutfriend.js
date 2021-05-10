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
    this.props.getUser(this.props.id);
    const {user} = this.props.users;

    var birth ;

    if(typeof user[0].birthDay !== 'undefined') birth =new Date(user[0].birthDay) ;
    else{
      setTimeout( 250);
  }
    

    this.state = {
      Firstname: user[0].firstName ,
      Lastname: user[0].lastName,
      Birthday: birth,
      Email :user[0].email ,
    

  }


}

 componentDidMount() {
    const {user} = this.props.users;
      this.setState({
       Firstname: user[0].firstName ,
       Lastname: user[0].lastName ,
       Email : user[0].email ,
     });
  }


 

 
  
  render(){
   
    const {user} = this.props.users;
    
   

   var brirth , month , day , year ; 

    if(typeof user[0].birthDay !== 'undefined') 
    {brirth =new Date(user[0].birthDay) ;
       month = brirth.getUTCMonth() + 1; //months from 1-12
       day = brirth.getUTCDate();
       year =brirth.getUTCFullYear();
    }
    else{
      setTimeout( 250);
    }

  

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
        value={user[0].firstName}
        
      />
      <Form.Field
        id='last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        value={user[0].lastName }
     
      />
      
     
    </Form.Group>
    
    
    <Form.Group widths='equal'> 
    <Form.Field
      id='email'
      control={Input}
      label='Email'
      placeholder='joe@gmail.com'
      value={user[0].email}
    
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
  

 