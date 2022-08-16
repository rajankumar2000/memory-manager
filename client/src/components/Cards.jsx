import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/assets/image.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{ color: "#36454F", fontWeight: "300" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
