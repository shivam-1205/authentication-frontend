import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // link with backend login

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7860/api/v1.0/user/login", {
        emailAddress: Email,
        userPassword: password,
      })
      .then((res) => {
        if (res.data.statusCode === 200) {
          const token = res.data.result.token;
          localStorage.setItem("fe_token", token);
          navigate("/moods");
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="auth-container">
        <h1 className={styles.login}>Login</h1>
        <form className={styles.from1}>
          <div className={styles.passwordDiv}>
            <label className={styles.label1}>Email</label>
            <input
              className={styles.emailInput}
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.passwordDiv}>
            <label className={styles.label2}>Password</label>
            <input
              className={styles.passwordInput}
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className={styles.button} onClick={submitLogin}>
            Submit
          </button>
          <div className={styles.divh3}>
            <h3 className={styles.header3}>Don't have an account </h3>
            <Link to={"/register"}>Registration</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
