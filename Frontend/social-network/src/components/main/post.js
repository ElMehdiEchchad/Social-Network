import React, {useState} from 'react';
import './post.css';
import { Avatar, Button} from '@material-ui/core';
import imgPosted from './imgPosted.png';
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa';
import Collapse from 'react-bootstrap/Collapse';
import {Container, Row, Col} from 'reactstrap';
import {IoSend} from 'react-icons/io5';

function Post(){
    const [open, setOpen] = useState(false);
    return(
        <div class="grid-containerPost">
        <div class="grid-itemPost itemProfileImg">
            <Avatar src="/broken-image.jpg" />
            <div class="usernamePost">
                    <a href="#" style={{textDecoration: "none"}}>Flan Flani</a>
                </div>
                <div class="postDate">05:45am, 12 Feb</div>
        </div>
        <div class="grid-itemPost itemPost2">
            <div className="textPosted">
                    Hey..
            </div>
            <div className="imgPosted">
                <img src={imgPosted} className="ImgResponsive" />
            </div>
        </div>
        <div className="grid-itemPost itemPost3">
            <div className="BtnPost">
                <Button type="submit" value="Submit" size="sm" 
                        style={{backgroundColor:"#F05945", fontFamily: "Montserrat", fontWeight:"bold", height:"20px", borderRadius:"5px", marginRight:"2%"}}>
                            <AiFillHeart style={{paddingRight:"2px", width:"20px"}}/>Like
                </Button>
                <Button size="sm" onClick={() => setOpen(!open)}
                        aria-controls="commentSection"
                        aria-expanded={open}
                        style={{backgroundColor:"#5EAAA8", fontFamily: "Montserrat", fontWeight:"bold", height:"20px", borderRadius:"5px"}}>
                        <FaComment style={{paddingRight:"3px", width:"20px"}}/>Comment
                </Button>
            </div>
        <Collapse in={open}>
            <div class="grid-containerComment">
                <div class="grid-itemComment itemComment1">
                    <input type="Post" placeholder="Type your comment.." className="CommentInput"/>
                </div>
                <div class="grid-itemComment itemComment2">
                    <Button type="submit" value="Submit" size="sm" 
                        style={{backgroundColor:"#5EAAA8", fontFamily: "Montserrat", fontWeight:"bold", height:"30px", borderRadius:"5px"}}>
                        Submit<IoSend style={{paddingLeft: "2px", width:"20px"}}/>
                    </Button>
                </div>
            
            </div>
       
        </Collapse>
                
         
        </div>
        </div>
    );

}

export default Post;
