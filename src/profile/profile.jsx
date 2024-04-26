import React, { useState } from "react";
import { Link } from "react-router-dom";
function Profile() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="App">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} />
      <Link to={"/"}>Login</Link>
    </div>
  );
}
export default Profile;
