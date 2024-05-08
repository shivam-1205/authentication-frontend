import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [userData, setUserData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("fe_token");
    const decodedToken = jwtDecode(token);
    setUserData(decodedToken.data);
  }, []);

  const logoutUser = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <h3 className="navbar-brand" href="#">
            Mental Health Journal
          </h3>

          <div>
            <button className="btn btn-outline-light" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
