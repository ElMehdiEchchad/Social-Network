import React, { Component } from "react";
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
    GetAllMyFriend(id);
  }, []);

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
                      ? ""
                      : process.env.PUBLIC_URL + "/defaultProfilePage.png"
                  }
                  roundedCircle
                />

                <span
                  class={user.isOnline ? "onlineDotGreen" : "onlineDotRed"}
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
