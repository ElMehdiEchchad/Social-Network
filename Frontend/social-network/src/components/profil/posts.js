import React, {Component, useState} from 'react';
import '../main/post.css';
import { Avatar, Button , Divider, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa';
import Collapse from 'react-bootstrap/Collapse';
import {IoSend} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Moment from "react-moment";



import {connect} from 'react-redux';
import {getPosts, addLike, addComment} from '../../actions/postActions';
import {getUser , getfriends} from '../../actions/itemActions';





class Post extends Component{
   
    constructor(props) {
        super(props);
        this.props.getPosts();            
      }

    handleOnChangeComment = e => {
        this.setState({
          [e.target.Comment]: e.target.value,
    
      })
    }
    render(){
        const {posts} = this.props.posts;
       

  
  if(typeof posts[0] !== 'undefined' &&  posts[0].length > 0 ) { 
    if(posts[0].filter(item => this.props.id===item.postedBy).length === 0){
    return (
    <div  style={{fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "29px",
        padding: "30px",
        color: "#F05945" , height:'250px' , width :"350px"}}>No Posts</div>);
    }

  }
 
   if(typeof posts[0] !== 'undefined'&& posts[0].length > 0) {  
    return(
       
        <div style={{width :"500px"}}>
         { posts[0].filter(item => this.props.id===item.postedBy).map( ({TextContent , Imagecontent , likes , postedBy , created,_id, comments, PosterProfileImage, PosterFirstname, PosterLastname}) => (
                  <div class="grid-containerPost" key={_id}>
                  <div class="grid-itemPost itemProfileImg">
                          <div><Avatar src={PosterProfileImage} /></div>
                          <div class="usernamePost">
                          {PosterFirstname+' '+PosterLastname}
                          </div>
                      <div class="postDate"><Moment format="YYYY/MM/DD">{created}</Moment></div>
                  </div>
                  <div class="grid-itemPost itemPost2">
                      <div className="textPosted">
                              {TextContent}
                      </div>
                      <div className="imgPosted">
                          <img src={Imagecontent} className="ImgResponsive" />
          
                        
                      </div>
                  </div>
                  <div className="grid-itemPost itemPost3">
                      <div className="BtnPost">
                          <Button type="submit" value="Submit" onClick={(e) =>{ const infoLike={id :_id, likedBy :this.props.id , likes :likes}; this.props.addLike(infoLike) ; window.location.reload()}} size="sm" 
                                  style={{backgroundColor:"#F05945", fontFamily: "Montserrat", fontWeight:"bold", height:"20px", borderRadius:"5px", marginRight:"2%"}}>
                                      {likes.length}<AiFillHeart style={{paddingRight:"2px", width:"20px"}}/>Like
                          </Button>
                          <Button size="sm" 
                                  style={{backgroundColor:"#5EAAA8", fontFamily: "Montserrat", fontWeight:"bold", height:"20px", borderRadius:"5px"}}>
                                  {comments.length}<FaComment style={{paddingRight:"3px", width:"20px"}}/>Comment
                          </Button>
                      </div>
                  <div >
                      <div class="grid-containerComment">
                      { comments.map( ({posterCommentfn , posterCommentln, posterCommentProfileImage, Comment}) => (
                          <div>
                          <ListItem>
                         <ListItemAvatar>
                             <Avatar src={posterCommentProfileImage} />
                          </ListItemAvatar>
                         <ListItemText primary={posterCommentfn + " "+posterCommentln} secondary={Comment} />
                             </ListItem>
                            
                          </div>
                      ))}
                         
                         
                      
                      </div>
                 
                  </div>
                          
                   
                  </div>
                  </div>
         )
         )}
        </div>
        
    );}else{
        return (
      
      <div  style={{fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "29px",
        padding: "30px",
        color: "#F05945" , height:'250px' , width :"350px"}}>No Posts</div>);
    } }

}


 const mapStateToProps = (state) => ({
    posts : state.posts ,
    users :state.users
 });
 

export default connect(mapStateToProps, {getPosts,getfriends , addComment, addLike, getUser}) (Post);

/*const [open, setOpen] = useState(false);*/
