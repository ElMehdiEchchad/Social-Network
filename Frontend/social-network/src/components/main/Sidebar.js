import styles from "./Sidebar.module.css";
import {
    FaHome,
    FaUserFriends,
    FaBookmark,
    FaFacebookMessenger,
    FaStar,
    FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profileHeader}>
                <div className={styles.avatar}>Avatar image here</div>
                <div className={styles.name}>Abderrahim Tantaoui</div>
                <div className={styles.email}>abdoutanta@gmail.com</div>
            </div>
            <div className={styles.navWrapper}>
                <div className={styles.navLink}>
                    <FaHome />
                    <div className={styles.link}>Home</div>
                </div>
                <div className={styles.navLink}>
                    <FaUserFriends />
                    <div className={styles.link}>Friends</div>
                </div>
                <div className={styles.navLink}>
                    <FaStar />
                    <div className={styles.link}>Notifications</div>
                </div>
                <div className={styles.navLink}>
                    <FaFacebookMessenger />
                    <div className={styles.link}>Messages</div>
                </div>
                <div className={styles.navLink}>
                    <FaBookmark />
                    <div className={styles.link}>Bookmarks</div>
                </div>
                <div className={`${styles.linkLogout} ${styles.navLink}`}>
                    <FaSignOutAlt />
                    <div className={styles.link}>Logout</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
