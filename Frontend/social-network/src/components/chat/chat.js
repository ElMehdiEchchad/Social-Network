import React ,{useContext,useEffect}from 'react'
import Dashboard from './Dashboard'
import { ConversationsProvider } from '../../contexts/ConversationsProvider';
import AuthContext from "../../contexts/AuthContext";

//import { SocketProvider } from '../../contexts/SocketProvider';

function App() {
  const { auth, setAuth } = useContext(AuthContext);
  var id = auth.userData.id

  useEffect(() => {

  }, [])
  const dashboard = (
    //<SocketProvider id={id}>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
   // </SocketProvider>
  )

  return (
    dashboard
  )
}

export default App;
