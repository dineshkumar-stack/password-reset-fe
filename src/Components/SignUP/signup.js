import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUpData = {
    name,
    email,
    password,
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (name !== "" && email !== "") {
      await axios
        .post(
          "https://password-reset-be-g2ts.onrender.com/user/signup",
          signUpData
        )
        .then((response) => {
          console.log("sign up successfully done");
        })
        .catch((err) => console.log(err.message));

      alert("Sign Up done successfully");
      navigate("/");
    } else {
      alert("Error in Input");
    }
  };

  return (
    <div className="formpage">
      <Form onSubmit={(e) => handleSignup(e)} className="form">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
        <div className="login">
          <div onClick={() => navigate("/")}>Go to Login page?</div>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
