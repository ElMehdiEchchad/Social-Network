import styles from "./Login.module.css";
import { useState } from "react";
import Axios from "axios";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: null,
        password: null,
    });

    const onChange = (e) => {
        if (e.target.name === "email") {
            setCredentials({ ...credentials, email: e.target.value });
        } else {
            setCredentials({ ...credentials, password: e.target.value });
        }
    };

    const login = () => {
        Axios.post("http://localhost:5000/api/users/login", credentials).then(
            (res) => {
                console.log(res);
            }
        );
    };

    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.left}>
                <img src={illustration} alt="Connected world" />
            </div> */}
            <div className={styles.right}>
                <form className={styles.form} id="login-form">
                    <h1>Login to PeopleBook now!</h1>
                    <h2>See what's new in your social circle...</h2>
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={onChange}
                    ></input>
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={onChange}
                    ></input>
                    <div className={styles.buttonPrimary} onClick={login}>
                        Login
                    </div>
                    <div className={styles.buttonSecondary}>
                        Register (not working)
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
