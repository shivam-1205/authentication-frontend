import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("fe_token");
    setIsLoggedIn(Boolean(token));
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <main>
          <Navbar />
          <Outlet />
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
