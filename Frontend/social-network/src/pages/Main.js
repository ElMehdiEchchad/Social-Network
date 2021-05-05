import styles from "./Main.module.css";
import { FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../components/main/Sidebar";
import MobileMenu from "../components/main/MobileMenu";
import { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import AddPost from "../components/main/AddPost";
import AuthContext from "../contexts/AuthContext";
<<<<<<< HEAD
import Post from "../components/main/post";
=======
import Axios from "axios";

import  Profilcard from "../components/profil/profil-card";
import  Aboutme from "../components/profil/aboutme";
import  Friends from "../components/profil/friends";
>>>>>>> 64f3416adeb0b98fbf00013ddd974e6e213cccb8

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}

const Main = () => {
    useEffect(() => {
        console.log(auth);
    }, []);

    const { auth, setAuth } = useContext(AuthContext);
    let mobile = useMediaQuery("(max-width: 700px)");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(
        (mobile) => {
            if (!mobile) setIsOpen(false);
        },
        [mobile]
    );

    const logout = () => {
        Axios.get("http://localhost:5000/api/logout", {
            withCredentials: true,
        }).then(() => {
            setAuth({ ...auth, loggedIn: false });
        });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>Peoplebook LOGO</div>
                    <input
                        type="text"
                        name="search"
                        placeholder="search"
                        className={styles.search}
                    />
                    {!mobile ? (
                        <div className={styles.logout} onClick={logout}>
                            <FaSignOutAlt className={styles.iconLogout} />
                            <div>Logout</div>
                        </div>
                    ) : (
                        <div
                            className={styles.menu}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <GiHamburgerMenu
                                className={styles.iconMenu}
                                size={28}
                            />
                        </div>
                    )}
                </nav>
                <nav className={styles.navMobile}>
                    <input
                        type="text"
                        name="search"
                        placeholder="search"
                        className={styles.searchMobile}
                    />
                </nav>
                {isOpen ? <MobileMenu /> : null}

                <div className={styles.grid}>
                    <div className={styles.profile}>
                        <Sidebar />
                    </div>
                    <div className={styles.main}>
                        <div className={styles.content}>
                            <Switch>
                                <Route path="/" exact>
                                    <AddPost />
                                    <Post />
                                </Route>
                                <Route path="/friends" exact>
                                    <Friends/>
                                </Route>
                                <Route path="/myprofil" exact>
                                    <Profilcard/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
