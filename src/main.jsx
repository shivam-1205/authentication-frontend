import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Moods from "./Moods/Moods.jsx";
import Questionnaire from "./Questionnaire/Questionnaire.jsx";
import Registration from "./Registration/Registration.jsx";
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
        path: "moods",
        children: [
          {
            path: "",
            element: (
              <Protected>
                <Moods />
              </Protected>
            ),
          },
          {
            path: ":moodId",
            element: (
              <Protected>
                <Questionnaire />
              </Protected>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
