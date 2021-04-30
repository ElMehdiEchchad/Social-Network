import React from 'react';
import { AiOutlineGif, AiOutlinePicture, AiOutlineSmile } from 'react-icons/ai';
import { Avatar } from '@material-ui/core';
import './AddPost.css';
import {Button} from '@material-ui/core';


const AddPost = () => {
    return(
        <div className="addPost">
            <div className="NewPost">
                New Post
            </div>
            <div className="Profile">
            <Avatar src="/broken-image.jpg" />
            </div>
            <input type="Post" placeholder="What's on your mind.."/>
            <div className="icons">
                <AiOutlineSmile style={{color:"#5EAAA8", fontSize:"1.5rem", marginInline: "5px"}}/>
                <AiOutlinePicture style={{color:"#5EAAA8", fontSize:"1.5rem", marginInline: "5px"}} />
                <AiOutlineGif style={{color:"#5EAAA8", fontSize:"1.5rem"}} />
            </div>
            <div className="Btn">
                <Button as="input" type="submit" value="Submit" style={{backgroundColor:"#F05945", fontFamily: "Montserrat", fontWeight:"bold"}}>Post</Button>
            </div>
          
           
            
           
        </div>
    );
}


export default AddPost;