import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const Navigate = useNavigate();

  useEffect(() => {
    let Login = localStorage.getItem("Login");
    if (!Login) {
      Navigate("/");
    }
  });

  return <>{props.children}</>;
}
export default Protected;
