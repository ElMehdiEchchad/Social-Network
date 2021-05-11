import React ,{useContext,useEffect}from 'react'
import Dashboard from './Dashboard'
import { ConversationsProvider } from '../../contexts/ConversationsProvider';
import AuthContext from "../../contexts/AuthContext";
import {SocketProvider} from "../../contexts/SocketProvider";
function App(props) {
  const { auth, setAuth } = useContext(AuthContext);
  var idUser = auth.userData.id

  useEffect(() => {
    console.log("the id from friends is : "+props.id)
  }, [])
  const dashboard = (
    <SocketProvider id={idUser}>
      <ConversationsProvider id={idUser}>
        <Dashboard id={idUser} />
      </ConversationsProvider>
   </SocketProvider>
  )

  return (
    dashboard
  )
}

export default App;
