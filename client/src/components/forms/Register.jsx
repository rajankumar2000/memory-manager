import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { BiHappy, BiSad, BiEdit } from "react-icons/bi";
import { ModalContext } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //Navigation
  const navigate = useNavigate();

  //getting toggle from userContext
  const { toggleRegister, toggleLogin } = useContext(ModalContext);
  const { login } = useContext(UserContext);

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.json())
      .then((data) => {
        toggleRegister();
        setTimeout(() => {
          toggleLogin();
        }, 1500);
      });
  };

  return (
    <Card style={{ padding: "10px", backgroundColor: "#D6EFED" }}>
      <Card.Header>Register</Card.Header>
      <Card.Body>
        <Form.Group md="4">
          <Form.Control
            required
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />
          <Form.Control
            required
            type="email"
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
            Register
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Register;
