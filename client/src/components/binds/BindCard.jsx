import Card from "react-bootstrap/Card";
import InfoModal from "./InfoModal";
import { useEffect, useState } from "react";
function BindCard({ userFullName, userAddress, dayForDelivery, user_id }) {


   const [showMoreInfoModal, setMoreInfoModal] = useState(false);

  
   const createMoreInfoModal = () => {
     setMoreInfoModal(true);
   };

   const hideMoreInfoModal = () => {
     setMoreInfoModal(false);
   };
  
  return (

    <>
    
    {showMoreInfoModal && <InfoModal hideModal={hideMoreInfoModal} />}
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{userFullName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{userAddress}</Card.Subtitle>
          <Card.Text>{dayForDelivery}</Card.Text>
          <button onClick={createMoreInfoModal}>Show more info</button>
       
      </Card.Body>
    </Card>
    </>
      
  );
}

export default BindCard;
