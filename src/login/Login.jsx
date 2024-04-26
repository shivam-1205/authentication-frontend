import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // link with backend login

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7860/api/v1.0/user/login", {
        emailAddress: Email,
        userPassword: password,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <h1 className="login">login</h1>
      <form className="from">
        <div>
          <label>Email : </label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={submitLogin}>Submit</button>
        <div>
          <h3>Don't have an account </h3>
          <Link to={"/register"}>Registration</Link>
          <br />
          <Link to={"/profile"}>profile</Link> <br />
          <Link to={"/Dashboard"}>Dashboard</Link>
        </div>
      </form>
    </>
  );
}

export default Login;
