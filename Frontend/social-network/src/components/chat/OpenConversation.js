import React, { useState, useEffect, useRef,useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversations } from "../../contexts/ConversationsProvider";
import "./chat.css"

export default function OpenConversation({ id }) {
  const [text, setText] = useState("");
  const [theRecipient, setTheRecipient] = useState({});
  const setRef = useCallback(node => {
    if(node){
      node.scrollIntoView({smooth:true})
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
    getConversation(selectedConversationId);
    listOfMyFriends.map(friend => {
      if (friend._id == selectedConversationId) {
        setTheRecipient(friend);
      }
    })


  }, [selectedConversationId]);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className=" d-flex flex-column  justify-content-end px-3">
          {conversationlist.map((message, index) => {
            const lastMessage = conversationlist.length - 1 === index;
            return (
              <div className="div">
                <div
                  //ref={lastMessage ? setRef : null}
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
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
            className="messageInput"
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            <InputGroup.Append>
              <Button className="btn-send" type="submit">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}


