// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginSuccess = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

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
      .then((data) => {
        setUser(data.data);
      })
      // .then((data) => {
      //   console.log(data.data[0].name);
      // })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="text">
      {user.map((getuser, index) => (
        <h1>Welcome {getuser.name} </h1>
      ))}
      <alert>Your Successfully logged in</alert>
    </div>
  );
};

export default LoginSuccess;
