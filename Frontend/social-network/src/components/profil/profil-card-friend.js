import React  from 'react';
import Ava from '@material-ui/core/Avatar';
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "../profil/ava2.jpg";
import {connect} from 'react-redux' ;
import {getUsers } from '../../actions/itemActions';
import AboutmeFriend from '../profil/aboutfriend';
import Post from '../profil/posts';
import { Tab } from 'semantic-ui-react'



export default class ProfilcardFriend extends React.Component{

   
  render(){


    const panes = [
    {
      menuItem: { key: 'users',  content: 'About' },
      render: () => <Tab.Pane><AboutmeFriend id={this.props.id} email={this.props.email} firstName={this.props.firstName} lastName={this.props.lastName} birthDay={this.props.birthDay}></AboutmeFriend></Tab.Pane>,
    },
 
    {
      menuItem: { key: 'posts', content :'Posts' },
      render: () => <Tab.Pane><Post id={this.props.id}/></Tab.Pane>,
    },
  ]
  
   
      return (
        <div  >
   
           <Ava  src={this.props.profileImage} style={{ height: '140px', width: '140px'  , left: '37%',
         alignItems:"center" , marginBottom :"10%"}}/>
      
           <Tab panes={panes} style={{marginTop :"5%"}} />
       

        
      </div>
      );
    
}


}