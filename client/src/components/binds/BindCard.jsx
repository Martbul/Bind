import Card from "react-bootstrap/Card";



function BindCard({
  userFullName,
  userAddress,
  dayForDelivery,
  bind_id,
  onBindInfoClick,
}) {
  const infoClickHandler = () => {
    window.scrollTo(0, 0);
    onBindInfoClick(bind_id);
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
          <button onClick={infoClickHandler}>Order Info</button>
        </Card.Body>
      </Card>
    </>
  );
}

export default BindCard;
