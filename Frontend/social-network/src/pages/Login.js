import styles from "./Login.module.css";
import { useState } from "react";
import Axios from "axios";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: null,
        password: null,
    });

    const [hasAccount, setHasAccount] = useState(true);

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

    const LoginForm = () => {
        return (
            <form className={styles.form} id="login-form">
                <h1 className={styles.h1}>Login to PeopleBook now!</h1>
                <label className={styles.label}>Email</label>
                <input
                    className={styles.input}
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={onChange}
                    defaultValue="test@gmail.com"
                    required
                ></input>
                <label className={styles.label}>Password</label>
                <input
                    className={styles.input}
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={onChange}
                    defaultValue="test"
                    required
                ></input>
                <div className={styles.buttonPrimary} onClick={login}>
                    Login
                </div>
                <div
                    className={styles.buttonSecondary}
                    onClick={() => setHasAccount(false)}
                >
                    Don't have an account?
                </div>
            </form>
        );
    };

    const RegisterForm = () => {
        return (
            <form className={styles.form} id="login-form">
                <h1 className={styles.label}>Login to PeopleBook now!</h1>
                <label className={styles.label}>Email</label>
                <input
                    className={styles.input}
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={onChange}
                    defaultValue="test@gmail.com"
                    required
                ></input>
                <label className={styles.label}>Password</label>
                <input
                    className={styles.input}
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={onChange}
                    defaultValue="test"
                    required
                ></input>
                <label className={styles.label}>First Name</label>
                <input
                    className={styles.input}
                    name="firstname"
                    type="text"
                    required
                ></input>
                <label className={styles.label}>Last Name</label>
                <input
                    className={styles.input}
                    name="lastname"
                    type="text"
                    required
                ></input>
                <div className={styles.buttonPrimary} onClick={login}>
                    Register
                </div>
                <div
                    className={styles.buttonSecondary}
                    onClick={() => setHasAccount(true)}
                >
                    You have an account?
                </div>
            </form>
        );
    };

    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.left}>
                <img src={illustration} alt="Connected world" />
            </div> */}
            <div className={styles.right}>
                {hasAccount ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    );
};

export default Login;
