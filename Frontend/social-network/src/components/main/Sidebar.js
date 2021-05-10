import styles from "./Sidebar.module.css";
import {
    FaHome,
    FaUserFriends,
    FaFacebookMessenger,
} from "react-icons/fa";
import {MdAccountCircle} from 'react-icons/md';
import { Link } from "react-router-dom";
import { Component } from "react";
import {getUser} from '../../actions/itemActions';
import PropTypes from "prop-types";
import {connect} from 'react-redux';

class Sidebar extends Component {
        
    render(){
    return (
        <div className={styles.sidebar}>
            
            <div className={styles.profileHeader}>
                <div className={styles.avatar}></div>
                <div className={styles.name}></div>
                <div className={styles.email}></div>
            </div>
            <div className={styles.navWrapper}>
                <Link to='/' className={styles.navLink}>
                    <FaHome />
                    <div className={styles.link}>Home</div>
                </Link>
                <Link to="friends" className={styles.navLink}>
                    <FaUserFriends />
                    <div className={styles.link}>Friends</div>
                </Link>
                <Link to="chat" className={styles.navLink}>
                    <FaFacebookMessenger />
                    <div className={styles.link}>Messages</div>
                </Link>
                <Link  to="myprofil" className={styles.navLink}>
                    <MdAccountCircle />
                    <div className={styles.link}>Profile</div>
                </Link>
            </div>
        </div>
    );}
};
Sidebar.propTypes = {
    getUser: PropTypes.func.isRequired,
}

export default connect(null, {getUser})(Sidebar) ;
