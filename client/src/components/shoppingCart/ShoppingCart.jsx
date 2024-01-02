import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useEffect, useState } from "react";
import ProfileContext from "../../contexts/profileContext";
import { pathToUrl } from "../../utils/pathUtils";
import AuthContext from "../../contexts/authContext";
import DayAndTimeModal from "./DayAndTimeModal";
import { Link } from "react-router-dom";
import Path from "../../paths";
export default function ShoppingCart() {
const [showDayAndTimeModal, setDayAndTimeModal] = useState(false);
   const [change, setChange] = useState(false);
  const { username, email, } = useContext(AuthContext);
  
  let {
    profileInfoHandler,
    userOrder,
    userOrderId,
    userAddress,
    userDayAndTimeForDelivery,
  } = useContext(ProfileContext);

  
    useEffect(() => {
      profileInfoHandler(email);
    }, [email, username, change]);
  
    const onButtonForModalClick = async () => {
      // console.log(bind_id);
      
      
      // console.log(selectedBind);
      setDayAndTimeModal(true);
    };

  
  
    const hideDayAndTimeModal = () => {
      setDayAndTimeModal(false);
  };
  const setNewChange = () => {
    setChange(true)
  }
  

  return (
    <>
      {showDayAndTimeModal && (
        <DayAndTimeModal
          hideModal={hideDayAndTimeModal}
          setNewChange={setNewChange}
        />
      )}

      <Card>
        <Card.Header as="h5">Поръчка</Card.Header>
        <Card.Body>
          <Card.Text>{`${userOrder} `},</Card.Text>
          <div style={{ display: "flex" }}>
            {userAddress != "" && (
              <Button onClick={onButtonForModalClick} variant="">
                Рдактирай ден, час и адрес на доставка
              </Button>
            )}

            {userAddress == "" && (
              <Button onClick={onButtonForModalClick} variant="primary">
                Задай ден и час
              </Button>
            )}

            <Link
              to={pathToUrl(Path.OrderEdit, { userOrderId })}
              variant="blue"
            >
              Редактирай поръчката
            </Link>
          </div>
        </Card.Body>
      </Card>
      {change == true || userAddress != ''&& (
        <Card>
          <Card.Body>
            <Card.Text>
              {`Адрес: ${userAddress}, ден и час: ${userDayAndTimeForDelivery} `}
              ,
            </Card.Text>
            <div style={{ display: "flex" }}></div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
