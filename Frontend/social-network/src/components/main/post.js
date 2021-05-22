import React, { Component } from "react";
import "./post.css";
import {
  Avatar,
  //Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Moment from "react-moment";
import { connect } from "react-redux";
import { getPosts, addLike, addComment } from "../../actions/postActions";
import { getUser, getfriends } from "../../actions/itemActions";

class Post extends Component {
  constructor(props) {
    super(props);

    this.handleOnChangeComment = this.handleOnChangeComment.bind(this);

    this.props.getPosts(this.props.id);
    this.props.getfriends(this.props.id);
    this.props.getUser(this.props.id);
    const { user } = this.props.users;
    this.state = {
      CommentText: "",
      isOpenComment:false
    };
  }

  handleOnChangeComment = (e) => {
    this.setState({
      CommentText: e.target.value,
    });
  };

  render() {
    const { user } = this.props.users;
    const { posts } = this.props.posts;

    console.log(posts);
    //console.log(posts[0].length);

    const { friends } = this.props.users;
    var listfriends = [];
    if (friends[0].friends) {
      friends[0].friends.map(({ _id }) => listfriends.push(_id));
    }
    listfriends.push(this.props.id);

    if (
      typeof friends[0].friends !== "undefined " &&
      typeof posts[0] !== "undefined" &&
      posts[0].length > 0
    ) {
      return (
        <div>
          {posts[0]
            .filter((item) => listfriends.includes(item.postedBy))
            .map(
              ({
                TextContent,
                Imagecontent,
                likes,
                postedBy,
                created,
                _id,
                comments,
                PosterFirstname,
                PosterLastname,
                PosterProfileImage,
              }) => (
                <Card key={_id}>
                  <Card.Body>
                    <Row className="align-items-start m-2">
                      <Col
                        xs={2}

                        className="justify-content-center d-flex"
                      >
                        <Image
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src={
                            PosterProfileImage
                              ? `data:image/png;base64,${btoa(
                                String.fromCharCode(
                                  ...new Uint8Array(PosterProfileImage.data)
                                )
                              )}`
                              : process.env.PUBLIC_URL + "/defaultProfilePage.png"
                          }
                          roundedCircle
                        />{" "}
                      </Col>
                      <Col className="justify-content-start">
                        <div className="nameOfuser">{PosterFirstname + " " + PosterLastname}</div>
                        <Moment format="YYYY/MM/DD">{created}</Moment>
                      </Col>
                    </Row>
                    <Col className="">
                      <Row className="justify-content-start m-2 ">
                        <div>{TextContent}</div>
                      </Row>
                      <Row className="justify-content-center">
                        <Image
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                          src={
                            Imagecontent
                              ? `data:image/png;base64,${btoa(
                                String.fromCharCode(
                                  ...new Uint8Array(Imagecontent.data.data)
                                )
                              )}`
                              : null
                          }
                          fluid
                        />
                      </Row>
                    </Col>

                    <Row className="m-2">
                      <Button
                        className="btn btn-like"
                        type="submit"
                        value="Submit"
                        onClick={(e) => {
                          const infoLike = {
                            id: _id,
                            likedBy: this.props.id,
                            likes: likes,
                          };
                          this.props.addLike(infoLike);
                          window.location.reload();
                        }}


                      >
                        <Row className="justify-content-around m-1 ">
                          {likes.length}
                          <AiFillHeart style={{ width: "20px" }} />
                          Like
                        </Row>
                      </Button>
                      <Button
                        className="btn btn-comment"
                        onClick={(e) => {
                          this.state = { 
                            isOpenComment: !this.state.isOpenComment
                          }
                        }}
                      >
                        <Row className="justify-content-around m-1 ">
                          {comments.length}
                          <FaComment style={{ width: "20px" }} />
                          Comment
                        </Row>
                      </Button>

                    </Row>
                    <hr style={{marginLeft:"15%",marginRight:"15%"}}></hr>


                    {/* comments */}
                    <Row>
                      {<div className="ml-4">Comments:</div>}
                      <ListGroup variant="flush" className="w-100 ml-4 mr-4">
                        {comments.map(
                          ({
                            posterCommentfn,
                            posterCommentln,
                            posterCommentProfileImage,
                            Comment,
                          }) => (
                            <>
                              <ListGroup.Item key={Comment} className="">
                                <Row className="align-items-start">
                                  <Col xs={1}>
                                    <Image
                                      style={{
                                        width: "25px",
                                        height: "25px",
                                        objectFit: "cover",
                                      }}
                                      src={
                                        posterCommentProfileImage
                                          ? posterCommentProfileImage
                                          : process.env.PUBLIC_URL + "/defaultProfilePage.png"
                                      }
                                      roundedCircle
                                    />
                                  </Col>
                                  <Col className=" justify-content-start">
                                    <div className="nameOfuser">
                                      {posterCommentfn + " " + posterCommentln}
                                    </div>
                                    <div className="">{Comment}</div>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                              <Divider variant="inset" component="li" />
                            </>
                          )
                        )}
                      </ListGroup>
                    </Row>
                    {/* submit comment */}
                    <Row>
                      <Form className="w-100">
                        <Form.Group className="m-2 ">
                          <InputGroup className="w-100">
                            <Form.Control
                              className="formControl"
                              as="textarea"
                              required
                              style={{ height: "40px", resize: "none" }}
                              value={this.state.CommentText}
                              onChange={this.handleOnChangeComment}
                              placeholder="Type your comment.."
                              enabled="true"
                            ></Form.Control>
                            <InputGroup.Append>
                              <Button
                                type="submit"
                                onClick={(e) => {
                                  const infoComment = {
                                    commentBy: this.props.id,
                                    id: _id,
                                    commentText: this.state.CommentText,
                                    posterfn: user[0].firstName,
                                    posterln: user[0].lastName,
                                    posterProfileImage: user[0].profileImage,
                                  };
                                  this.props.addComment(infoComment);
                                  window.location.reload();
                                }}
                                style={{
                                  backgroundColor: "#5EAAA8",
                                  fontFamily: "Montserrat",
                                  fontWeight: "bold",
                                  borderRadius: "5px",
                                }}
                              >
                                Comment
                                <IoSend
                                  style={{ paddingLeft: "2px", width: "20px" }}
                                />
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </Form.Group>
                      </Form>
                    </Row>
                  </Card.Body>
                </Card>
                // <div class="grid-containerPost" key={_id}>
                //   <div class="grid-itemPost itemProfileImg">

                //     <div>
                //       <Avatar
                //         src="" /*{PosterProfileImage ? `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(PosterProfileImage.data)))}`: null}*/
                //       />
                //     </div>

                //     <div class="usernamePost">
                //       {PosterFirstname + " " + PosterLastname}
                //     </div>
                //     <div class="postDate">
                //       <Moment format="YYYY/MM/DD">{created}</Moment>
                //     </div>
                //   </div>

                //   <div class="grid-itemPost itemPost2">
                //     <div className="textPosted">{TextContent}</div>
                //     <div className="imgPosted">
                //       <img
                //         src={
                //           Imagecontent
                //             ? `data:image/png;base64,${btoa(
                //                 String.fromCharCode(
                //                   ...new Uint8Array(Imagecontent.data.data)
                //                 )
                //               )}`
                //             : null
                //         }
                //         className="ImgResponsive"
                //       />
                //     </div>
                //   </div>
                //   <div className="grid-itemPost itemPost3">
                //     <div className="BtnPost">
                //       <Button
                //         type="submit"
                //         value="Submit"
                //         onClick={(e) => {
                //           const infoLike = {
                //             id: _id,
                //             likedBy: this.props.id,
                //             likes: likes,
                //           };
                //           this.props.addLike(infoLike);
                //           window.location.reload();
                //         }}
                //         size="sm"
                //         style={{
                //           backgroundColor: "#F05945",
                //           fontFamily: "Montserrat",
                //           fontWeight: "bold",
                //           height: "20px",
                //           borderRadius: "5px",
                //           marginRight: "2%",
                //         }}
                //       >
                //         {likes.length}
                //         <AiFillHeart
                //           style={{ paddingRight: "2px", width: "20px" }}
                //         />
                //         Like
                //       </Button>
                //       <Button
                //         size="sm"
                //         style={{
                //           backgroundColor: "#5EAAA8",
                //           fontFamily: "Montserrat",
                //           fontWeight: "bold",
                //           height: "20px",
                //           borderRadius: "5px",
                //         }}
                //       >
                //         {comments.length}
                //         <FaComment
                //           style={{ paddingRight: "3px", width: "20px" }}
                //         />
                //         Comment
                //       </Button>
                //       <br></br>
                //     </div>
                //     <div>
                //       <div class="grid-containerComment">
                //         <List>
                //           {comments.map(
                //             ({
                //               posterCommentfn,
                //               posterCommentln,
                //               posterCommentProfileImage,
                //               Comment,
                //             }) => (
                //               <div>
                //                 <ListItem>
                //                   <ListItemAvatar>
                //                     <Avatar src={posterCommentProfileImage} />
                //                   </ListItemAvatar>
                //                   <ListItemText
                //                     primary={
                //                       posterCommentfn + " " + posterCommentln
                //                     }
                //                     secondary={Comment}
                //                   />
                //                 </ListItem>
                //                 <Divider variant="inset" component="li" />
                //               </div>
                //             )
                //           )}
                //         </List>
                //         <div class="grid-itemComment itemComment1">
                //           <input
                //             onChange={this.handleOnChangeComment}
                //             value={this.state.CommentText}
                //             type="Post"
                //             placeholder="Type your comment.."
                //             className="CommentInput"
                //           />
                //         </div>
                //         <div class="grid-itemComment itemComment2">
                //           <Button
                //             type="submit"
                //             value="Submit"
                //             size="sm"
                //             onClick={(e) => {
                //               const infoComment = {
                //                 commentBy: this.props.id,
                //                 id: _id,
                //                 commentText: this.state.CommentText,
                //                 posterfn: user[0].firstName,
                //                 posterln: user[0].lastName,
                //                 posterProfileImage: user[0].profileImage,
                //               };
                //               this.props.addComment(infoComment);
                //               window.location.reload();
                //             }}
                //             style={{
                //               backgroundColor: "#5EAAA8",
                //               fontFamily: "Montserrat",
                //               fontWeight: "bold",
                //               height: "30px",
                //               borderRadius: "5px",
                //             }}
                //           >
                //             Submit
                //             <IoSend
                //               style={{ paddingLeft: "2px", width: "20px" }}
                //             />
                //           </Button>
                //         </div>
                //       </div>
                //       <br></br>
                //       <Divider />
                //     </div>
                //   </div>
                // </div>
              )
            )}
        </div>
      );
    } else {
      return (
        <div
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "29px",
            padding: "30px",
            color: "#F05945",
          }}
        >
          No Posts
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  users: state.users,
});

export default connect(mapStateToProps, {
  getPosts,
  getfriends,
  addComment,
  addLike,
  getUser,
})(Post);
