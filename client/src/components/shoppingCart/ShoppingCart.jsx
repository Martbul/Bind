import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useEffect, useState } from "react";
import ProfileContext from "../../contexts/profileContext";

import AuthContext from "../../contexts/authContext";
import DayAndTimeModal from "./DayAndTimeModal";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
const [showDayAndTimeModal, setDayAndTimeModal] = useState(false);
   
  const { username, email } = useContext(AuthContext);
  let {
    profileInfoHandler,
    userOrder,
  } = useContext(ProfileContext);

  
    useEffect(() => {
      profileInfoHandler(email);
    }, [email, username]);
  
    const onButtonForModalClick = async () => {
      // console.log(bind_id);
      
      
      // console.log(selectedBind);
      setDayAndTimeModal(true);
    };

  
  
    const hideDayAndTimeModal = () => {
      setDayAndTimeModal(false);
    };

  return (
    <>
      {showDayAndTimeModal && (
        <DayAndTimeModal
          hideModal={hideDayAndTimeModal}
          // bindId={selectedBind}
        />
      )}

      <Card>
        <Card.Header as="h5">Поръчка</Card.Header>
        <Card.Body>
          <Card.Text>{`${userOrder} `},</Card.Text>
          <div style={{ display: "flex" }}>
            <Button onClick={onButtonForModalClick} variant="primary">
              Задай ден и час
            </Button>
            <Link to="/binds/edit/:bindId" variant="blue">
              Редактирай
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
