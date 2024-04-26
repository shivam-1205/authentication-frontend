import React, { useState } from "react";
import { Link } from "react-router-dom";

function ChangePassword() {
  const [newpassword, setNewPassword] = useState("");
  const [oldpassword, setOldPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7860/api/v1.0/user/login", {
        oldpassword: oldpassword,
        newPassword: newpassword,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div>
        <label>Old Password : </label>
        <input
          type="password"
          placeholder="oldpassword"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label>New Password : </label>
        <input
          type="password"
          placeholder="newpassword"
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
        />
      </div>
      <button>Submit</button>
      <br />
      <Link to={"/"}>Login</Link>
    </>
  );
}
export default ChangePassword;
