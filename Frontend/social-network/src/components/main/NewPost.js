import React, {Component, useState} from 'react';
import { AiOutlineGif, AiOutlineSmile } from 'react-icons/ai';
import { Avatar } from '@material-ui/core';
import './NewPost.css';
import {Button} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


import {connect} from 'react-redux';
import {addPost} from '../../actions/postActions';
import {getUser} from '../../actions/itemActions';




class NewPost extends Component{
  
  state={
    userId: this.props.id,
    TextContent: '',
    Imagecontent: null,
  }
  
  handleOnChangeText = e => {
    this.setState({
      [e.target.TextContent]: e.target.value,

  })
}
  handleOnChangeImage = e => {
    this.setState({Imagecontent:e.target.files[0]});
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.setState({
        TextContent: '',
        Imagecontent: null,
    });
}


    render(){
    return(
      <Container minWidth="xs">
      <div className="grid-container" onSubmit={this.handleOnSubmit}>
      <div className="grid-item NewPost">New Post</div>
      
      <div className="grid-item">
          <a><Avatar src="/broken-image.jpg" /></a>
      </div> 
      <div className="grid-item item2">
        <input  onChange={this.handleOnChangeText} value={this.state.TextContent} type="text" name="text" placeholder="What's on your mind.." className="PostInput"/>
      </div>
      <div class="grid-item item4">
        <Button type="submit" value="Submit" style={{backgroundColor:"#F05945", fontFamily: "Montserrat", fontWeight:"bold"}}>Post</Button>
        </div>
      <div class="grid-item item5">
      <div className="icons">
                <IconButton><AiOutlineSmile style={{color:"#5EAAA8", fontSize:"1.5rem"}}/></IconButton>
                <input onChange={this.handleOnChangeImage} value={this.state.Imagecontent} name="image" accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
                <label htmlFor="icon-button-file">
                  <IconButton style={{color:"#5EAAA8", fontSize:"1.5rem"}} aria-label="upload picture" component="span">
                      <PhotoCamera />
                  </IconButton>
                </label>
                <IconButton><AiOutlineGif style={{color:"#5EAAA8", fontSize:"1.5remname"}} /></IconButton>
            </div>
        </div>
      </div>
      </Container>
    );}
}
const mapstateToProps = (state) => ({
  post : state.post
})


export default connect(mapstateToProps, {addPost}) (NewPost);