import styles from "./Sidebar.module.css";
import {
    FaHome,
    FaUserFriends,
    FaFacebookMessenger,
} from "react-icons/fa";
import {MdAccountCircle} from 'react-icons/md';
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            
            <div className={styles.profileHeader}>
                <div className={styles.avatar}></div>
                <div className={styles.name}>Abderrahim Tantaoui</div>
                <div className={styles.email}>abdoutanta@gmail.com</div>
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
                <Link className={styles.navLink}>
                    <FaFacebookMessenger />
                    <div className={styles.link}>Messages</div>
                </Link>
                <Link  to="myprofil" className={styles.navLink}>
                    <MdAccountCircle />
                    <div className={styles.link}>Profile</div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
