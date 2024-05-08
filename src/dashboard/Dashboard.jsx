import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";

function Dashboard() {
  const [userData, setUserData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    debugger;
    const token = localStorage.getItem("fe_token");
    const decodedToken = jwtDecode(token);
    setUserData(decodedToken.data);
  });

  const logoutUser = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className={styles.dashboard}>
        <table>
          <thead>
            <tr>
              <th>Username </th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tr>
            <td>{userData.fullName}</td>
            <td>{userData.emailAddress}</td>
            <td>{userData.mobileNumber}</td>
          </tr>
        </table>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </>
  );
}
export default Dashboard;
