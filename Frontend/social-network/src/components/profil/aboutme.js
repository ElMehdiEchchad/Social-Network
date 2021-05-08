import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Input,  Button , Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux' ;
import {getUser , updateUser} from '../../actions/itemActions';

import { ImagePicker } from 'react-file-picker'

 class Aboutme extends React.Component{
   
  constructor(props) {
    super(props);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeEmail  = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
 
    this.props.getUser(this.props.id);
    const {user} = this.props.users;

    this.state = {
      Firstname: user[0].firstName ,
      Lastname: user[0].lastName,
      Birthday: new Date(),
      Email :user[0].email ,
      isToggle: true

  }

  console.log("birthday"+user[0].birthDay)

}



 componentDidMount() {
    const {user} = this.props.users;
      this.setState({
       Firstname: user[0].firstName ,
       Lastname: user[0].lastName ,
       Email : user[0].email ,
     });
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

  handleClick(e) {
    this.setState({isToggle: !this.state.isToggle});
  }

  onSubmit(e) {
    e.preventDefault();
  
    const userupdated = {
      firstName: this.state.Firstname,
      lastName: this.state.Lastname,
      birthDay: this.state.Birthday,
      email : this.state.Email,

    };
    this.props.updateUser(this.props.id ,userupdated);
    this.setState({isToggle: !this.state.isToggle});
    window.location.reload()
    
  }

  
  render(){
   
    const {user} = this.props.users;
    
    const {id} = this.props.id ;

      return (
 <div>
    
 <Form onSubmit={this.handleClick} style={{display: this.state.isToggle ? 'block': 'none'}}>
    
 <Form.Group widths='equal'>
      <Form.Field
        id='first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        value={user[0].firstName}
        onChange={this.onChangeFirstname}
      />
      <Form.Field
        id='last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        value={user[0].lastName }
        onChange={this.onChangeLastname}
      />
      
     
    </Form.Group>
    
    
    <Form.Group widths='equal'> 
    <Form.Field
      id='email'
      control={Input}
      label='Email'
      placeholder='joe@gmail.com'
      value={user[0].email}
      onChange={this.onChangeEmail}
    />

    <Form.Field
        id='form-input-control-Birthday-Date'
        control={Input}
        label='Birthday Date'
        placeholder='Birthday Date'
        value={user[0].Birthday}
      >
      </Form.Field>
    
      </Form.Group>
     
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Edit profil'
      style={{ marginLeft:"1%" , color: "white" , backgroundColor :"#F05945"}}
    />
  </Form>


  

  <Form onSubmit={this.onSubmit} style={{display: this.state.isToggle ? 'none':'block'}}>
    <Form.Group widths='equal'>
      <Form.Field
        id='first-name2'
        control={Input}
        label='First name'
        placeholder='First name'
        value={this.state.Firstname}
        onChange={this.onChangeFirstname}
      />
      <Form.Field
        id='last-name2'
        control={Input}
        focus ='true'
        label='Last name'
        placeholder='Last name'
        value={this.state.Lastname}
        onChange={this.onChangeLastname}
      />
      
     
    </Form.Group>

    <Form.Group widths='equal'>
    
    <Form.Field
        id='Birthday-Date'
        control={Input}
        label='Birthday Date'
        placeholder='Birthday Date'
      >
       <DatePicker selected={this.state.Birthday} onChange={this.onChangeBirthday} />
      </Form.Field>
    
   <ImagePicker
    extensions={['jpg', 'jpeg', 'png']}
    dims={{minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500}} >
    <Form.Input label='Profil image' type='file' />
    </ImagePicker>
  
    
      </Form.Group>
    
   <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Update'
      style={{ marginLeft:"1%" , color: "white" , backgroundColor :"#F05945"}}
    />
  </Form>

  </div>   
      
      );
  }
    }

  const mapStateToProps = (state) => ({
      users : state.users
  });

  export default connect(mapStateToProps, {getUser ,updateUser})(Aboutme) ;
  

 