import React from 'react';
import './Feed.css';
import { Avatar, Button} from '@material-ui/core';
import {Container} from 'reactstrap';
import imgPosted from '../assets/imgPosted.png';
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa';

function Feed(){
    return(     
        <Container className="Feed">
            <div className="LatestPosts">
                Latest Posts
            </div>
            <div className="feedProfile">
            <Avatar src="/broken-image.jpg" />
            </div>
            <div className="username">
                <a href="#" style={{textDecoration:"none"}}>Flan Flani</a>
            </div>
            <div className="postDate">05:45am, 12 Feb</div>
            <div className="PostContent">
                <div className="textPosted">
                    Hey..
                </div>
                <div className="imgPosted">
                    <img src={imgPosted} />
                </div>
            </div>
            <div className="BtnLike">
                <Button as="input" type="submit" value="Submit" size="sm" style={{backgroundColor:"#F05945", fontFamily: "Montserrat", fontWeight:"bold", height:"20px"}}><AiFillHeart/>Like</Button>
                </div>
                <div className="BtnComment">
                <Button as="input" type="submit" value="Submit" size="sm" style={{backgroundColor:"#5EAAA8", fontFamily: "Montserrat", fontWeight:"bold", height:"20px"}}><FaComment/>Comment</Button>
            </div>
        </Container>
     

    );
}

export default Feed;