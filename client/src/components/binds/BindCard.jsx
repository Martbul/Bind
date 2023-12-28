import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BindCard({
  image,
  productName,
  price,
  bind_id,
  description,
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
          width: "10rem",
          marginLeft: "2%",
          marginRight: "2%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Button onClick={infoClickHandler} style={{}} variant="primary">
            Добави към поръчката
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default BindCard;
