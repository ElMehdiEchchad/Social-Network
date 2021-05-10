import styles from "./MobileMenu.module.css";
import {
    FaHome,
    FaUserFriends,
    FaBookmark,
    FaFacebookMessenger,
    FaStar,
    FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { Component } from "react";
import {getUser} from '../../actions/itemActions';
import PropTypes from "prop-types";
import {connect} from 'react-redux';

class MobileMenu extends Component {
   
    render(){
    return (
        <div className={styles.sidebar}>
            <div className={styles.profileHeader}>
                <div className={styles.avatar}></div>
                <div className={styles.info}>
                    <div className={styles.name}></div>
                    <div className={styles.email}></div>
                </div>
            </div>
            <div className={styles.navWrapper}>
                <div className={styles.navLink}>
                   <Link to='/' className={styles.navLink}>
                    <FaHome />
                    <div className={styles.link}>Home</div>
                    </Link>
                </div>
                <div  className={styles.navLink}>
                    <Link to='/friends' className={styles.navLink}>
                    <FaUserFriends />
                    <div className={styles.link}>Friends</div>
                    </Link>
                </div>
                <div  className={styles.navLink}>
                <Link to="/chat" className={styles.navLink}>
                    <FaFacebookMessenger />
                    <div className={styles.link}>Messages</div>
                </Link>
                </div>
                <div className={styles.navLink}>
                   <Link to='/myprofil' className={styles.navLink}>
                    <FaBookmark />
                    <div className={styles.link}>Profil</div>
                    </Link>
                </div>
            </div>
        </div>
    );}
};
MobileMenu.propTypes = {
    getUser: PropTypes.func.isRequired,
}

export default connect(null, {getUser})(MobileMenu) ;

