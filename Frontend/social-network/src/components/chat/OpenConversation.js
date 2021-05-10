import React, { useState, useEffect, useRef, useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversations } from "../../contexts/ConversationsProvider";
import "./chat.css"
import { IoSendSharp } from 'react-icons/io5';
import { Link } from "react-router-dom";

export default function OpenConversation({ id }) {
  const [text, setText] = useState("");
  const [theRecipient, setTheRecipient] = useState({});
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, []
  )



  const {
    selectedConversationId,
    getConversation,
    conversationlist,
    sendMessage,
    listOfMyFriends
  } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(
      selectedConversationId,
      text
    )
    setText("");
  }



  //get all conversation of two users when the user choice the recipient
  useEffect(() => {
    if (selectedConversationId) {
      getConversation(selectedConversationId);
      listOfMyFriends.map(friend => {
        if (friend._id == selectedConversationId) {
          setTheRecipient(friend);
        }
      })
    }

  }, [selectedConversationId]);


  function ConversationExist() {
    return (<>
      {conversationlist.map((message, index) => {
        const lastMessage = conversationlist.length - 1 === index;
        return (
          <div className="div" key={index}>
            <div
              ref={lastMessage ? setRef : null}
              key={index}
              className={`my-1 d-flex flex-column ${message.sender == id
                ? "align-self-end align-items-end "
                : "align-items-start "
                }`}
            >
              <div className="createdAt" >{message.createdAt.substr(11, 5)}</div>

              <div
                className={`rounded px-2 py-1 ${message.sender == id
                  ? "bg-primary text-white messageFrameEnd"
                  : "border messageFrameStart"
                  }`}
              >
                {message.message}
              </div>

              <div
                className={`text-muted  ${message.sender == id
                  ? "text-right align-self-end"
                  : "text-left align-self-start"
                  }`}
              >
                {message.sender == id
                  ? "You"
                  : theRecipient.firstName}
              </div>
            </div>
          </div>
        );
      })}
    </>)
  }

  function ConversationNotExist() {
    return (
      <>
        <div className="">SELECT A FREIND</div>
      </>
    )
  }

  function isAllowed() {
    if (selectedConversationId) {
      return (
        <>
          <Form.Control
            className="messageInput"
            as="textarea"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ height: "75px", resize: "none" }}
            placeholder="write your message here ..." enabled
          />
          <InputGroup.Append>
            <Button className="btn-send" type="submit"><IoSendSharp className="btn-send-icon" size="20"></IoSendSharp></Button>
          </InputGroup.Append>
        </>
      )
    } else {
      return (
        <>
          <Form.Control
            className="messageInput"
            as="textarea"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ height: "75px", resize: "none" }}
            placeholder="Select a friend" disabled
          />
          <InputGroup.Append>
            <Button className="btn-send" type="" disabled><IoSendSharp className="btn-send-icon" size="20"></IoSendSharp></Button>
          </InputGroup.Append>
        </>
      )
    }

  }


  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className=" d-flex flex-column  justify-content-end px-3">
          {conversationlist ? ConversationExist() : ConversationNotExist()}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            {isAllowed()}
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}


