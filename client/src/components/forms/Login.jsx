import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { BiHappy, BiSad, BiEdit } from "react-icons/bi";
import { ModalContext } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  //getting toggle from userContext
  const { toggleLogin } = useContext(ModalContext);
  const { login } = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    }).then((res) => res.json());

    // setting user
    if (data) {
      localStorage.setItem("currentUser", JSON.stringify(data));
      login(data);
      toggleLogin();
    } else {
      toast.error("Login first!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Card style={{ padding: "10px", backgroundColor: "#D6EFED" }}>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form.Group md="4">
          <Form.Control
            required
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />
        </Form.Group>
      </Card.Body>
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outline-success" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Login;
