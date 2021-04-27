import styles from "./Login.module.css";
import illustration from "../assets/illustration.svg";
import { useState } from "react";

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

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <img src={illustration} alt="Connected world" />
            </div>
            <div className={styles.right}>
                <div className={styles.form}>
                    <h1>This is just a layout skeleton</h1>
                    <h2>Nothing is working yet</h2>
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
                    <div className={styles.button}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
