import axois from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [mobileReg, setMobileReg] = useState("");

  // link with backend registration
  const submitForm = (e) => {
    e.preventDefault();
    axois
      .post("http://localhost:7860/api/v1.0/user/registration", {
        fullName: usernameReg,
        mobileNumber: mobileReg,
        userPassword: passwordReg,
        emailAddress: emailReg,
      })
      .then((responce) => {
        console.log(responce);
      });
  };

  return (
    <>
      <h1 className="title">Registration Form</h1>
      <form className="from">
        <div>
          <label>Full name : </label>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Mobile Number : </label>
          <input
            type="number"
            placeholder="Number"
            onChange={(e) => {
              setMobileReg(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={submitForm}>Submit</button>
          <Link to={"/"}>Login</Link>
        </div>
      </form>
    </>
  );
}

export default Registration;
