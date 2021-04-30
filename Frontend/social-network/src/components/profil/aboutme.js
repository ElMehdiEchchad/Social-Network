import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Form, Input,  Button} from 'semantic-ui-react';


export default class Aboutme extends React.Component{
   
  //const [startDate, setStartDate] = useState(new Date());
  
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeEmail  = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Firstname: '',
      Lastname: '',
      Birthday: new Date(),
      Email : '',
      Password :''
    }

  }

  /*componentDidMount() {
    this.setState({ 
      Firstname: 'test user'
    });
  }*/


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

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const infos = {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Birthday: this.state.Birthday,
      Email : this.state.Email,
      Password :this.state.Password
    };
  
    console.log(infos);
    
    window.location = '/myprofil';
  }
  render(){
      return (
    
 <Form onSubmit={this.onSubmit} style={{ width: '60%'  , height :"45%" ,overflowY:"scroll", position: 'absolute', left: '50%', top: '90%',
        transform: 'translate(-50%, -90%)', backgroundColor :"white" , padding: "2%"}}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        value={this.state.Firstname}
        onChange={this.onChangeFirstname}
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        value={this.state.Lastname}
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
      value={this.state.Email}
      onChange={this.onChangeEmail}
    />
     <Form.Field
      id='form-input-control-error-password'
      control={Input}
      label='Enter Password'
      type='password'
      placeholder='password'
      value={this.state.Password}
      onChange={this.onChangePassword}
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

  

 