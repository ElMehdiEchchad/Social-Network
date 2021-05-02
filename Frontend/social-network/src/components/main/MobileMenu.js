import styles from "./MobileMenu.module.css";
import {
    FaHome,
    FaUserFriends,
    FaBookmark,
    FaFacebookMessenger,
    FaStar,
    FaSignOutAlt,
} from "react-icons/fa";

const MobileMenu = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profileHeader}>
                <div className={styles.avatar}></div>
                <div className={styles.info}>
                    <div className={styles.name}>Abderrahim Tantaoui</div>
                    <div className={styles.email}>abdoutanta@gmail.com</div>
                </div>
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
            </div>
        </div>
    );
};

export default MobileMenu;
