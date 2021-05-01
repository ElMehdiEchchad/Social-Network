import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Form, Input,  Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux' ;
import {getUsers } from '../../actions/itemActions';




 class Aboutme extends React.Component{
   
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeEmail  = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Firstname: '',
      Lastname: '',
      Birthday: new Date(),
      Email :''
    }

  }

  componentDidMount() {
      this.props.getUsers();
    
      /* this.setState({
       Firstname: users[0].firstName ,
       Lastname: users[0].lastName ,
       Email : users[0].email ,
       Password :users[0].password
     });*/
  }


  onChangeFirstname(e) {
    this.setState({
      Firstname: e.target.value
    });
  }

  onChangeLastname(e) {
    this.setState({
      Lastname: e.target.value
    });
  }

  onChangeBirthday(date) {
    this.setState({
      Birthday :date
    });
  }

  onChangeEmail(e) {
    this.setState({
      Email :e.target.value
    });
  }

 

  onSubmit(e) {
    e.preventDefault();
  
    const infos = {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Birthday: this.state.Birthday,
      Email : this.state.Email,
    };
  
    
    window.location = '/myprofil';
  }

  
  render(){
   
    const {users} = this.props.users;
    

      return (
    
 <Form onSubmit={this.onSubmit} style={{ width: '60%'  , height :"45%" ,overflowY:"scroll", position: 'absolute', left: '50%', top: '90%',
        transform: 'translate(-50%, -90%)', backgroundColor :"white" , padding: "2%"}}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        value={users[0].firstName}
        onChange={this.onChangeFirstname}
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        value={users[0].lastName}
        onChange={this.onChangeLastname}
      />
      <Form.Field
        id='form-input-control-Birthday-Date'
        control={Input}
        label='Birthday Date'
        placeholder='Birthday Date'
      >
       <DatePicker selected={this.state.Birthday} onChange={this.onChangeBirthday} />
      </Form.Field>
     
    </Form.Group>

  
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@gmail.com'
      value={users[0].email}
      onChange={this.onChangeEmail}
    />
     <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Profil photo'
      placeholder='Profil photos'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Update'
      style={{ marginLeft:"89%" , color: "white" , backgroundColor :"#F05945"}}
    />
  </Form>
      
      );
  }
    }

  const mapStateToProps = (state) => ({
      users : state.users
  });

  export default connect(mapStateToProps, {getUsers})(Aboutme) ;
  

 