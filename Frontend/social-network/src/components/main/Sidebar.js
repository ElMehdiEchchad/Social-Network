import styles from "./Sidebar.module.css";
import {
    FaHome,
    FaUserFriends,
    FaFacebookMessenger,
} from "react-icons/fa";
import { MdAccountCircle } from 'react-icons/md';
import { Link } from "react-router-dom";
import { Component } from "react";
import { getUser } from '../../actions/itemActions';
import { connect } from 'react-redux';
import Avatar from "../profil/ava2.jpg";


class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    /* componentDidMount() {
         const {user} = this.props.users;
       }*/


    render() {
        const { user } = this.props.users;


        return (
            <div className={styles.sidebar}>

                <div className={styles.profileHeader}>
                    <div style={{ position: 'relative' }}>
                        <img className={styles.avatar} src={
                            typeof user[0].profileImage !== 'undefined'
                                && user[0].profileImage !== '' ? `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(user[0].profileImage.data.data)))}` : Avatar}>
                        </img>
                        <span
                            className={user[0].isOnline ? styles.onlineDotGreenSideBar :  styles.onlineDotRedSideBar}
                        ></span>
                    </div>
                    <div className={styles.name}>{user[0].firstName + " " + user[0].lastName}</div>
                    <div className={styles.email}>{user[0].email}</div>
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
                    <Link to="myprofil" className={styles.navLink}>
                        <MdAccountCircle />
                        <div className={styles.link}>Profile</div>
                    </Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps, { getUser })(Sidebar);
