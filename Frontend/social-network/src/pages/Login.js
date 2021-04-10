import styles from "./Login.module.css";
import illustration from "../assets/illustration.svg";

const Login = () => {
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
                    <input type="email" placeholder="email"></input>
                    <label>password</label>
                    <input type="password" placeholder="password"></input>
                    <div className={styles.button}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
