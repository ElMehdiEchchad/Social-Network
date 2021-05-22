import React, { Component } from "react";
import "../main/post.css";
import {
  Divider,
} from "@material-ui/core";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Moment from "react-moment";
import {
  Card,
  Row,
  Col,
  Image,
  ListGroup,
  Button,
} from "react-bootstrap";


import { connect } from "react-redux";
import { getPosts, addLike, addComment } from "../../actions/postActions";
import { getUser, getfriends } from "../../actions/itemActions";

class Post extends Component {
  constructor(props) {
    super(props);
    this.props.getPosts();
  }

  handleOnChangeComment = (e) => {
    this.setState({
      [e.target.Comment]: e.target.value,
    });
  };
  render() {
    const { posts } = this.props.posts;
    const {user} = this.props.users;
    // if (typeof user[0].profileImage !== 'undefined' && user[0].profileImage !== '') {
    //     const arrayBuffer = user[0].profileImage.data.data
    //     base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
    //   }


    if (typeof posts[0] !== "undefined" && posts[0].length > 0) {
      if (
        posts[0].filter((item) => this.props.id === item.postedBy).length === 0
      ) {
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
              height: "250px",
              width: "350px",
            }}
          >
            No Posts
          </div>
        );
      }
    }

    if (typeof posts[0] !== "undefined" && posts[0].length > 0) {
      return (
        <div style={{ width: "500px" }}>
          {posts[0]
            .filter((item) => this.props.id === item.postedBy)
            .map(
              ({
                TextContent,
                Imagecontent,
                likes,
                postedBy,
                created,
                _id,
                comments,
                PosterProfileImage,
                PosterFirstname,
                PosterLastname,
              }) => (
                <Card key={_id}>
                  <Card.Body>
                    <Row className="align-items-start m-2">
                      <Col xs={2} className="justify-content-center d-flex">
                        <Image
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src={
                            user[0].profileImage.data
                              ? `data:image/png;base64,${btoa(
                                  String.fromCharCode(
                                    ...new Uint8Array(user[0].profileImage.data.data)
                                  )
                                )}`
                              : process.env.PUBLIC_URL +
                                "/defaultProfilePage.png"
                          }
                          roundedCircle
                        />{" "}
                      </Col>
                      <Col className="justify-content-start">
                        <div className="nameOfuser">
                          {PosterFirstname + " " + PosterLastname}
                        </div>
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
                      >
                        <Row className="justify-content-around m-1 ">
                          {likes.length}
                          <AiFillHeart style={{ width: "20px" }} />
                          Like
                        </Row>
                      </Button>
                      <Button
                        className="btn btn-comment"
                      >
                        <Row className="justify-content-around m-1 ">
                          {comments.length}
                          <FaComment style={{ width: "20px" }} />
                          Comment
                        </Row>
                      </Button>
                    </Row>
                    <hr style={{ marginLeft: "15%", marginRight: "15%" }}></hr>

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
                                          : process.env.PUBLIC_URL +
                                            "/defaultProfilePage.png"
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
        
                  </Card.Body>
                </Card>

              
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
            height: "250px",
            width: "350px",
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

/*const [open, setOpen] = useState(false);*/
