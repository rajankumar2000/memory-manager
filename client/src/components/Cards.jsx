import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { BiEdit, BiHappy, BiSad } from "react-icons/bi";

function Cards({ title, story, mood, memoryId }) {
  const [random, setRandom] = useState(1);
  useEffect(() => {
    setRandom((random) => Math.floor(Math.random() * 10));
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`/assets/image(${random}).jpg`}
        height={"200px"}
        width={"200px"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: "#36454F", fontWeight: "300" }}>
          {story}
        </Card.Text>
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <BiHappy
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: mood === "happy" ? "blue" : "black",
            }}
          />
          <BiSad
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: mood === "sad" ? "blue" : "black",
            }}
          />
          <BiEdit style={{ fontSize: "30px", cursor: "pointer" }} />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default Cards;
