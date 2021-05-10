import React, { Component } from 'react';
import {getUser} from '../../actions/itemActions';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { Avatar} from '@material-ui/core';

class PostedBy extends Component{
    constructor(props) {
        super(props);
        this.props.getUser(this.props.id);
        }
    
 
    render(){
        const {user} = this.props.users;
        return(
            <div>
               <Avatar src={user[0].profileImage} />
                <div class="usernamePost">
                <Link to={'/profil/${user}'}>{user[0].firstName+' '+ user[0].lastName}</Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users : state.users
});

export default connect(mapStateToProps, {getUser})(PostedBy) ;