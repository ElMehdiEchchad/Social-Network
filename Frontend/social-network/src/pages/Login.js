import styles from "./Login.module.css";
import { useState } from "react";
import Axios from "axios";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    const [hasAccount, setHasAccount] = useState(true);

    const login = () => {
        console.log({ email, password });
        Axios.post("http://localhost:5000/api/login", {
            email,
            password,
        }).then((res) => {
            console.log(res);
        });
    };

    const register = () => {
        console.log({ email, password, firstName, lastName });
        Axios.post("http://localhost:5000/api/register", {
            email,
            password,
            firstName,
            lastName,
        }).then((res) => {
            console.log(res);
        });
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
                    value={email}
                    onChange={(e) => {
                        e.preventDefault();
                        setEmail(e.target.value);
                    }}
                    required
                ></input>
                <label className={styles.label}>Password</label>
                <input
                    className={styles.input}
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
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
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                ></input>
                <label className={styles.label}>Password</label>
                <input
                    className={styles.input}
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                ></input>
                <label className={styles.label}>First Name</label>
                <input
                    className={styles.input}
                    name="firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    required
                ></input>
                <label className={styles.label}>Last Name</label>
                <input
                    className={styles.input}
                    name="lastname"
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    required
                ></input>
                <div className={styles.buttonPrimary} onClick={register}>
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
                {hasAccount ? LoginForm() : RegisterForm()}
            </div>
        </div>
    );
};

export default Login;
