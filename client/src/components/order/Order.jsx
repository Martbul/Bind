import { useRef, useState, useEffect, useContext } from "react";
import * as orderService from "../../services/orderServices";
import SuccessfulOrderModal from "./SuccessfulOrderModal";
import AuthContext from "../../contexts/authContext";
const formInitialState = {
  fullname: "",
  address: "",
  dayForDelivery: "",
  timeForDelivery: "",
  order: "",
};
export default function Order() {
  const [formValues, setFormValues] = useState(formInitialState);
  const [showSuccessfulOrderModal, setSuccessfulOrderModal] = useState(false);
  const [errors, setErrors] = useState("");
  const { email, username, isAuthenticated } = useContext(AuthContext);

  const changeHandler = (e) => {
    let value = e.target.value;

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFomrHandler = () => {
    setFormValues(formInitialState);
    setErrors("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(formValues);

    if (!isAuthenticated) {
      const alerted = alert(`You must be logged in to make an order!`);
      throw Error;

      if (alerted) {
        navigate("/singup");
      }
    }
    if (
      formValues.fullname.length < 3 ||
      typeof formValues.fullname != "string" ||
      !formValues.fullname.match(/^[a-zA-Z]+ [a-zA-Z]+$/)
    ) {
      setErrors("Please enter a valid name");
      throw new Error("Please enter a valid name");
    }

    if (
      formValues.address.length < 5 ||
      typeof formValues.address != "string"
    ) {
      setErrors("Please enter a valid address");
      throw new Error("Please enter a valid address");
    }

    if (
      formValues.dayForDelivery.length < 5 ||
      typeof formValues.dayForDelivery != "string"
    ) {
      setErrors("Please enter a valid day for delivery");
      throw new Error("Please enter a valid day for delivery");
    }

    // if(formValues.timeForDelivery.length !== 5 || typeof(formValues.timeForDelivery) != 'string'){
    //   setErrors('Please enter a valid time for delivery')
    //   throw new Error('Please enter a valid time for delivery')

    // }

    if (formValues.order.length < 4 || typeof formValues.order != "string") {
      setErrors("Please enter a valid order");
      throw new Error("Please enter a valid order");
    }

    if (!formValues.timeForDelivery.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
      setErrors("Please enter a valid time for delivery");
      throw new Error("Please enter a valid time for delivery");
    }

    try {
      formValues.email = email;
      formValues.username = username;

      const order = await orderService.create(formValues);
      console.log(order._id);
      // setSuccessfulOrderModal(true)
    } catch (message) {
      console.log(message);
    }

    resetFomrHandler();
  };

  // const createSuccessfulOrderModal = () => {

  //     setSuccessfulOrderModal(true);
  //   };

  const hideSuccessfulOrderModal = () => {
    setSuccessfulOrderModal(false);
  };

  return (
    <>
      {showSuccessfulOrderModal && (
        <SuccessfulOrderModal
          hideSuccessfulOrderModal={hideSuccessfulOrderModal}
        />
      )}

      <section className="s11">
        <div className="container00">
          <div className="text00">Специялна поръчка</div>
          <form method="POST">
            <div className="form-row00">
              <div className="input-data textarea">
                <textarea
                  id="order"
                  name="order"
                  rows={8}
                  cols={80}
                  value={formValues.order}
                  onChange={changeHandler}
                />
                {errors == "Please enter a valid order" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <br />
                <div className="underline" />
                <label htmlFor="">
                  Поръчкай нещо което не е в нашия списък
                </label>
                <br />
                <div className="form-row00 submit-btn">
                  <div className="input-data">
                    <div className="inner" />
                    <input
                      style={{ fontSize: "15px" }}
                      type="button"
                      defaultValue="Добави в количката"
                      onClick={submitHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
