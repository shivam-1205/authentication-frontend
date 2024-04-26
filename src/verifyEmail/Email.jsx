import axois from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function VerifyEmail() {
  const [searchParams, setSearchparams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Verifying Email...");

  useEffect(() => {
    const token = searchParams.get("token");
    console.warn(searchParams.get("token"));
    setTimeout(() => {
      axois
        .post("http://localhost:7860/api/v1.0/user/verifyEmail", {
          emailAddress: token,
        })
        .then((response) => {
          setStatus("Email successfully verify");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        });
    }, 3000);
  });

  return (
    <>
      <h2>{status}</h2>
    </>
  );
}

export default VerifyEmail;
