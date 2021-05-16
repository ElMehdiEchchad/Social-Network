import React, { Component,useState } from "react";
import { ListGroup, ListGroupItem, Row, Col, Image } from "react-bootstrap";
import { useConversations } from "../../contexts/ConversationsProvider";
import { useEffect } from "react";
import "./chat.css";

export default function Conversations({ id }) {
  const {
    selectedConversationId,
    selectConversationId,
    listOfMyFriends,
    GetAllMyFriend,
  } = useConversations();
  

  useEffect(() => {
    //this run at frist time 
    GetAllMyFriend(id);
    //this will run every 5 seconds
    const interval = setInterval(() => {
      GetAllMyFriend(id);
    }, 10000);
    return () => clearInterval(interval);


  }, [])



  function friendsExist(listOfMyFriends, selectedConversationId) {
    return (
      <>
        {listOfMyFriends.map((user) => (
          <ListGroup.Item
            className="listOfFriends"
            key={user._id}
            action
            active={user._id == selectedConversationId ? true : false}
            onClick={() => selectConversationId(user._id)}
          >
            <Row className="align-items-center">
              <Col xs={4} md={2} className="justify-content-center d-flex">
                <Image
                  style={{ width: "25px", height: "25px", objectFit: "cover" }}
                  src={
                    user.profileImage
                      ? `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(user.profileImage.data.data)))}` 
                      : process.env.PUBLIC_URL + "/defaultProfilePage.png"
                  }
                  roundedCircle
                />

                <span
                  className={user.isOnline ? "onlineDotGreen" : "onlineDotRed"}
                ></span>
              </Col>
              <Col>{user.lastName + " " + user.firstName}</Col>
            </Row>
          </ListGroup.Item>
        ))}
      </>
    );
  }

  function friendNotExist() {
    return (
      <>
        <div className="">no friends</div>
      </>
    );
  }

  return (
    <>
      <ListGroup variant="flush">
        {listOfMyFriends
          ? friendsExist(listOfMyFriends, selectedConversationId)
          : friendNotExist()}
      </ListGroup>
    </>
  );
}
