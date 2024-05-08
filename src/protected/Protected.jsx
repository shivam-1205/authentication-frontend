import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("fe_token");
    let isTokenPresent;
    if (token) {
      isTokenPresent = token.split(".").length === 3;
    }
    if (!isTokenPresent) {
      navigate("/");
    }
  }, []);

  return <>{props.children}</>;
}
export default Protected;
