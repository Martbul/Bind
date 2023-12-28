import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useEffect, useState } from "react";
import ProfileContext from "../../contexts/profileContext";

import AuthContext from "../../contexts/authContext";

export default function ShoppingCart() {

   
  const { username, email } = useContext(AuthContext);
  let {
    profileInfoHandler,
    userOrder,
   
    
  } = useContext(ProfileContext);

  
    useEffect(() => {
      profileInfoHandler(email);
    }, [email, username]);

  return (
    <>
      <Card>
        <Card.Header as="h5">Поръчка</Card.Header>
        <Card.Body>
          <Card.Text>{`${userOrder} `},</Card.Text>
          <Button variant="primary">Задай ден и час</Button>
          <Button variant="blue">Редактирай</Button>
        </Card.Body>
      </Card>
    </>
  );
}
