import axois from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Registration.module.css";

function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [mobileReg, setMobileReg] = useState("");
  var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

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
        if (responce.data.statusCode === 200) {
          alert("Registration done successfully please verify email");
        }
        if (responce.data.statusCode === 400) {
          alert("Email Address or mobile number already exists ");
        }
      });
  };

  return (
    <>
      <h1 className={Styles.header2}>Registration Form</h1>
      <form className={Styles.from2}>
        <div className={Styles.devFullName}>
          <label className={Styles.labelfullName}>Full name : </label>
          <input
            className={Styles.inputText}
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
        </div>
        <div className={Styles.DivMobileNumber}>
          <label className={Styles.labelMobileNumber}>Mobile Number : </label>
          <input
            className={Styles.NumberInput}
            type="number"
            placeholder="Number"
            onChange={(e) => {
              setMobileReg(e.target.value);
              if (value.match(phoneNo)) {
                return true;
              } else {
                alert("message");
                return false;
              }
            }}
          />
        </div>
        <div>
          <label className={Styles.emailLabel}>Email : </label>
          <input
            className={Styles.emailInput}
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </div>
        <div className={Styles.passwordDiv}>
          <label className={Styles.labelPassword}>Password : </label>
          <input
            className={Styles.inputInput}
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </div>
        <div className={Styles.submitDiv}>
          <button onClick={submitForm}>Submit</button>
          <Link to={"/"}>Login</Link>
        </div>
      </form>
    </>
  );
}

export default Registration;
