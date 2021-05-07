import React, { useContext, useState, useEffect, useCallback } from "react";
import { useSocket } from "../contexts/SocketProvider";
import axios from "axios";

const ConversationsContext = React.createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {

  const [selectedCoversationId, setSelectedCoversationId] = useState(0);
  const socket = useSocket();
  const [listOfMyFriends, setListOfMyFriends] = useState([]);
  const [conversationlist, setConversationlist] = useState([]);




  //------------- get all my friends conversations--------------------//

  function GetAllMyFriend(idUser) {
    axios
      .get(`http://localhost:5000/api/user/${idUser}/friends`, { withCredentials: true })
      .then((response) => {
        setListOfMyFriends(response.data.friends);
      })
      .catch((error) => {
        console.log(error);
      });
  }




  useEffect(() => {
    if (socket == null) return;

    socket.on("receive-message", ({ recipient, sender, message }) => {
      addMessageToConversation(recipient, message,sender);
    })

    return () => socket.off("receive-message");
  }, [socket]);


  //--------------------------Add message to conversation----------------------------------
  function addMessageToConversation(recipient, message, sender) {
    axios
      .post(
        `http://localhost:5000/api/pivatechat/${sender}`,
        {
          message: message,
          recipient: recipient,
        },
        { withCredentials: true }
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



  //-------------------------------------------------------------------- SEND MESSAGE ------------------------//
  function sendMessage(recipient, message, sender = id) {
    socket.emit('send-message', { recipient, message })
    addMessageToConversation(recipient, message, sender)
  }



  // get conversation of two users
  function getConversation(recipient) {
    const sender = id;
    axios
      .get(
        `http://localhost:5000/api/pivatechat/${sender}/${recipient}`, { withCredentials: true }
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


