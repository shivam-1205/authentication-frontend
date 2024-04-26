import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Registration from "./Registration/Registration.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import "./index.css";
import Login from "./login/Login.jsx";
import Profile from "./profile/profile.jsx";
import Protected from "./protected/Protected.jsx";
import Email from "./verifyEmail/Email.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "verify-email",
        element: <Email />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "Dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
