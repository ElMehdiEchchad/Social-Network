import React, {Component} from 'react';
import { AiOutlineGif, AiOutlineSmile } from 'react-icons/ai';
import { Avatar, FormGroup } from '@material-ui/core';
import './NewPost.css';
import {Button} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import {connect} from 'react-redux';
import {addPost} from '../../actions/postActions';
import {getUser} from '../../actions/itemActions';
import {PropTypes} from 'prop-types';
import {Form} from 'reactstrap';



class NewPost extends Component{

  constructor(props) {
    super(props);
    this.props.getUser(this.props.id);
    const {user} = this.props.users;
    this.state={
      text: '',
      userId: this.props.id,
      Image: null,
      posterfn:user[0].firstName,
      posterln : user[0].lastName,
      profileImage:user[0].profileImage
    }
    }

  handleOnChangeText = e => {
    this.setState({
        text: e.target.value

  });
}
  handleOnChangeImage = e => {
    this.setState({
        Image:e.target.files[0]
    });
  }

  handleOnSubmit = e => {
    const {user} = this.props.users;
    e.preventDefault();
    const newPost= {
      text: this.state.text,
      userId: this.state.userId,
      Image: this.state.Image,
      posterfn:user[0].firstName,
      posterln : user[0].lastName,
      profileImage:user[0].profileImage
    }
    this.props.addPost(newPost);
    this.setState({
        text: '',
        Image: null,
    });
    window.location.reload();
}

    render(){
      const {user} = this.props.users;
    return(
      <Container minWidth="xs">
      <div className="grid-container" >
      <div className="grid-item NewPost">New Post</div>

      <div className="grid-item">
          <a><Avatar src={ typeof user[0].profileImage!== 'undefined' && user[0].profileImage!== '' ?`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(user[0].profileImage.data.data)))}`:Avatar } /></a>
      </div> 
      
      <Form onSubmit={this.handleOnSubmit}>
        
      <div className="grid-item item2">
      <FormGroup>
        <input  onChange={this.handleOnChangeText} value={this.state.text} type="text" name="TextContent" placeholder="What's on your mind.." className="PostInput"/>
        </FormGroup>
      </div>
      <div class="grid-item item5">
      <FormGroup>
      <div className="icons">
                <IconButton><AiOutlineSmile style={{color:"#5EAAA8", fontSize:"1.5rem"}}/></IconButton>
                <input onChange={this.handleOnChangeImage} value={this.state.Image} name="Imagecontent" accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
                <label htmlFor="icon-button-file">
                  <IconButton style={{color:"#5EAAA8", fontSize:"1.5rem"}} aria-label="upload picture" component="span">
                      <PhotoCamera />
                  </IconButton>
                </label>
                <IconButton><AiOutlineGif style={{color:"#5EAAA8", fontSize:"1.5remname"}} /></IconButton>
            </div>
          </FormGroup>
        </div>
        <div class="grid-item item4">
        <Button type="submit"  style={{backgroundColor:"#F05945", fontFamily: "Montserrat", fontWeight:"bold"}}>Post</Button>
        </div>
        
        
        </Form>
      </div>
     
      </Container>
    );}
}
NewPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users : state.users
});


export default connect(mapStateToProps, {addPost, getUser}) (NewPost);