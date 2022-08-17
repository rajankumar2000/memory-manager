import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiHappy, BiSad, BiEdit } from "react-icons/bi";

function Cards({ title, story }) {
  return (
    <Card style={{ maxWidth: "18rem" }}>
      <Card.Img variant="top" src="/assets/image.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: "#36454F", fontWeight: "300" }}>
          {story}
        </Card.Text>
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <BiHappy style={{ fontSize: "30px", cursor: "pointer" }} />
          <BiSad style={{ fontSize: "30px", cursor: "pointer" }} />
          <BiEdit style={{ fontSize: "30px", cursor: "pointer" }} />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default Cards;
