import Card from "react-bootstrap/Card";



function BindCard({
  userFullName,
  userAddress,
  dayForDelivery,
  user_id,
  onDetailsClick,
}) {

  const onDetailsClickHandler = () => {
    onDetailsClick(user_id);
  };
  return (
    <>
      <Card
        style={{
          width: "18rem",
          marginLeft: "5%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <Card.Body>
          <Card.Title>{userFullName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {userAddress}
          </Card.Subtitle>
          <Card.Text>{dayForDelivery}</Card.Text>
          <button onClick={onDetailsClickHandler}>Show more info</button>
        </Card.Body>
      </Card>
    </>
  );
}

export default BindCard;
