import React, { useContext, useState, useEffect, useCallback } from "react";
//import { useSocket } from "./SocketProvider";
import axios from "axios";

const ConversationsContext = React.createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {
    //const socket = useSocket();

  

  

  // useEffect(() => {
  //   if (socket == null) return;

  //   socket.on("receive-message", addMessageToConversation);

  //   return () => socket.off("receive-message");
  // }, [socket, addMessageToConversation]);

//------------- get all my friends conversations--------------------//
const [listOfMyFriends, setListOfMyFriends] = useState([]);
  function GetAllMyFriend() {
    axios
      .get("http://localhost:5000/api/user/6092aae9c178f330fcbb3b81/friends",{withCredentials: true})
      .then((response) => {
        setListOfMyFriends(response.data.friends);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //-------------------------------------------------------------------- SEND MESSAGE ------------------------//
  function sendMessage(recipient, text) {
    //socket.emit('send-message', { recipients, text })
    const sender = id;
    axios
      .post(
        `http://localhost:5000/api/pivatechat/${sender}`,
        {
          message: text,
          recipient: recipient,
        },
        {withCredentials: true}
      )
      .then((response) => {
        setConversationlist((previous) => {
          return [...previous, response.data.data];
        });
  
      })
      .catch((error) => {
        console.log(error);
      });
  }

  
  const [selectedCoversationId, setSelectedCoversationId] = useState(0);

  // get conversation of two users
  const [conversationlist, setConversationlist] = useState([]);
  function getConversation(recipient) {
    const sender = id;
    axios
      .get(
        `http://localhost:5000/api/pivatechat/${sender}/${recipient}`,{withCredentials: true}
      )
      .then((response) => {
        setConversationlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const value = {
    sendMessage,
    selectConversationId: setSelectedCoversationId,
    selectedConversationId: selectedCoversationId,
    getConversation,
    conversationlist,
    listOfMyFriends,
    GetAllMyFriend
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}


