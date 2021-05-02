import styles from "./Sidebar.module.css";
import {
    FaHome,
    FaUserFriends,
    FaBookmark,
    FaFacebookMessenger,
    FaStar,
    FaSignOutAlt,
} from "react-icons/fa";
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
                <Link className={styles.navLink}>
                    <FaHome />
                    <div className={styles.link}>Home</div>
                </Link>
                <Link to="friends" className={styles.navLink}>
                    <FaUserFriends />
                    <div className={styles.link}>Friends</div>
                </Link>
                <Link className={styles.navLink}>
                    <FaStar />
                    <div className={styles.link}>Notifications</div>
                </Link>
                <Link className={styles.navLink}>
                    <FaFacebookMessenger />
                    <div className={styles.link}>Messages</div>
                </Link>
                <Link className={styles.navLink}>
                    <FaBookmark />
                    <div className={styles.link}>Bookmarks</div>
                </Link>
                <Link
                    to="/login"
                    className={`${styles.linkLogout} ${styles.navLink}`}
                >
                    <FaSignOutAlt />
                    <div className={styles.link}>Logout</div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
