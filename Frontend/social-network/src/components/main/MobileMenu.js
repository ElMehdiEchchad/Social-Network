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
import { getUser } from '../../actions/itemActions';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class MobileMenu extends Component {

    constructor(props) {
        super(props);
        this.props.getUser(this.props.id);
    }

    componentDidMount() {
        const { user } = this.props.users;
    }


    render() {
        const { user } = this.props.users;
        return (
            <div className={styles.sidebar}>
                <div className={styles.profileHeader}>
                    <div style={{ position: 'relative' }}>
                        <img className={styles.avatar}
                            src={typeof user[0].profileImage !== 'undefined' ? `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(user[0].profileImage.data.data)))}` : ""}>
                        </img>
                        <span
                            className={user[0].isOnline ? styles.onlineDotGreenSideBar : styles.onlineDotRedSideBar}
                        ></span>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>{user[0].firstName + user[0].lastName}</div>
                        <div className={styles.email}>{user[0].email}</div>
                    </div>
                </div>
                <div className={styles.navWrapper}>
                    <div className={styles.navLink}>
                        <Link to='/' className={styles.navLink}>
                            <FaHome />
                            <div className={styles.link}>Home</div>
                        </Link>
                    </div>
                    <div className={styles.navLink}>
                        <Link to='/friends' className={styles.navLink}>
                            <FaUserFriends />
                            <div className={styles.link}>Friends</div>
                        </Link>
                    </div>
                    <div className={styles.navLink}>
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
        );
    }
};
const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps, { getUser })(MobileMenu);

