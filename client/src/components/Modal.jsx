import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { BiHappy, BiSad, BiEdit } from "react-icons/bi";

const Modal = () => {
  const [body, setBody] = useState({
    title: "",
    story: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        zIndex: "999",
        top: "5rem",
        left: 0,
        right: 0,
        margin: "0 auto",
      }}
    >
      <Card style={{ padding: "10px", backgroundColor: "#D6EFED" }}>
        <Card.Header>CREATE NEW MEMORY</Card.Header>
        <Card.Body>
          <Form.Group md="4">
            <Form.Control
              required
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              style={{ marginBottom: "10px" }}
            />
            <FloatingLabel controlId="floatingTextarea2" label="Memory">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
                name="story"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BiHappy style={{ fontSize: "30px", cursor: "pointer" }} />
            <BiSad style={{ fontSize: "30px", cursor: "pointer" }} />
            <Button variant="outline-success" onClick={handleSubmit}>
              Create
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Modal;
