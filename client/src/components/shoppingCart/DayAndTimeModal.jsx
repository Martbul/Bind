import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as orderService from "../../services/orderServices";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/authContext";
const formInitialState = {
  dayAndTimeForDelivery: "",
  address:''
};

//! naprawi prowerka dali usera veche e zadal address i den i ako e mu pokavi samo productite koito im s, adres an kojto shte dojde porychkata i opciq za promqna na denq, chasa i mqsoto
export default function DayAndTimeModal({ hideModal }) {
   const [formValues, setFormValues] = useState(formInitialState);
    const { email , isAuthenticated } = useContext(AuthContext);
   
  const changeHandler = (e) => {
    let value = e.target.value;

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFomrHandler = () => {
    setFormValues(formInitialState);
   // setErrors("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    

    if (!isAuthenticated) {
      const alerted = alert(`You must be logged in to make an order!`);
      throw Error;

      
    }
    

   //  if (!formValues.timeForDelivery.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
   //    setErrors("Please enter a valid time for delivery");
   //    throw new Error("Please enter a valid time for delivery");
   //  }

    try {
      formValues.email = email;

      const setDayAndTimeAndAddress = await orderService.setDatAndTimeAndAddress(formValues);
      
      // setSuccessfulOrderModal(true)
    } catch (message) {
      console.log(message);
    }

    resetFomrHandler();
  };


  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Потвърждаване на поръчката</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form method="POST">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="dayAndTimeForDelivery"
                  >
                    Ден и час:
                  </label>
                  <input
                    type="text"
                    placeholder="Понеделник-18:30"
                    id="dayAndTimeForDelivery"
                    name="dayAndTimeForDelivery"
                    className=" form-control-alternative"
                    values={formValues.dayAndTimeForDelivery}
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="dayAndTimeForDelivery"
                  >
                    Адрес
                  </label>
                  <input
                    type="text"
                    placeholder="ул. Победа 15, София"
                    id="address"
                    name="address"
                    className=" form-control-alternative"
                    values={formValues.address}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>
          </form>
          <p>
            Ще получите тези поръчката си всяка седмиза в зададения ден и час!
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={hideModal} variant="secondary">
            Затвори
          </Button>
          <Button onClick={submitHandler} variant="primary">
            Потвърди поръчката
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}