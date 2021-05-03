import React from 'react';
import { AiOutlineGif, AiOutlinePicture, AiOutlineSmile } from 'react-icons/ai';
import { Avatar } from '@material-ui/core';
import './AddPost.css';
import {Button} from '@material-ui/core';
import Container from '@material-ui/core/Container';



function AddPost() {
    return(
      <Container minWidth="xs">
      <div className="grid-container">
      <div className="grid-item NewPost">New Post</div>
      <div className="grid-item">
          <a><Avatar src="/broken-image.jpg" /></a>
        </div>  
      <div className="grid-item item2"><input type="Post" placeholder="What's on your mind.." className="PostInput"/></div>
      <div class="grid-item item4"><Button as="input" type="submit" value="Submit" style={{backgroundColor:"#F05945", fontFamily: "Montserrat", fontWeight:"bold"}}>Post</Button></div>
      <div class="grid-item item5">
      <div className="icons">
                <AiOutlineSmile style={{color:"#5EAAA8", fontSize:"1.5rem", marginInline: "5px"}}/>
                <AiOutlinePicture style={{color:"#5EAAA8", fontSize:"1.5rem", marginInline: "5px"}} />
                <AiOutlineGif style={{color:"#5EAAA8", fontSize:"1.5rem"}} />
            </div>
        </div>
      </div>
      </Container>
    );
}


export default AddPost;