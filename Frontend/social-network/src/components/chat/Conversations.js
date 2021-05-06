import React, { Component } from "react";
import { ListGroup, ListGroupItem, Row, Col, Image } from "react-bootstrap";
import { useConversations } from "../../contexts/ConversationsProvider";
import { useState, useEffect } from "react";

export default function Conversations({ id }) {
  const { selectedConversationId, selectConversationId ,listOfMyFriends,GetAllMyFriend} = useConversations();

  useEffect(() => {
    GetAllMyFriend();

  }, []);

  return (
    <>
      <ListGroup variant="flush">
        {listOfMyFriends.map((user) => (
          <ListGroup.Item
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
              </Col>
              <Col>{user.lastName + " " + user.firstName}</Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
