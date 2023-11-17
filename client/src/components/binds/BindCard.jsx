import Card from "react-bootstrap/Card";

function BindCard({ userFullName, userAddress, dayForDelivery, user_id }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{ userFullName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{userAddress}</Card.Subtitle>
        <Card.Text>
          {dayForDelivery}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BindCard;
