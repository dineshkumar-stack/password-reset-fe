// import axios from "axios";
// import { useState } from "react";
import { useEffect } from "react";

const LoginSuccess = (props) => {
  const authToken = localStorage.getItem("authToken");

  const headers = {
    Authorization: `${authToken}`,
    "Content-Type": "application/json",
  };
  const apiUrl = "https://password-reset-be-g2ts.onrender.com/home";

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="text">
      <h1>Welcome</h1>
      <alert>Your Successfully logged in</alert>
    </div>
  );
};

export default LoginSuccess;
