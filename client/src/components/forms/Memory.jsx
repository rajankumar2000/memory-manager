import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { BiHappy, BiSad, BiEdit } from "react-icons/bi";
import MemoryContext from "../../context/MemoryContext";
import { ModalContext } from "../../context/ModalContext";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

const Memory = () => {
  const { memories, getMemories } = useContext(MemoryContext);
  const { toggleMemory } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  const [body, setBody] = useState({
    title: "",
    story: "",
  });
  console.log(body);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/api/post/${user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...body }),
    }).then((res) => console.log(res.json()));
    toggleMemory();
  };

  return (
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
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          <BiHappy
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => setBody({ ...body, mood: "happy" })}
          />
          <BiSad
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => setBody({ ...body, mood: "sad" })}
          />
          <Button variant="outline-success" onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Memory;
