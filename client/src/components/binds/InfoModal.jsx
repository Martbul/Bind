import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as bindsService from "../../services/bindsService";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";
import * as orderService from "../../services/orderServices";

const formInitialState = {
  quantity: "",
};

export default function InfoModal({ hideModal, rerenderDeletedModal, bindId }) {
  //! sled natiskane na butona "dobawi w koli`nata" trqnwa produkta sys kolichestwoto da se zapazqt v profila na usera
  const [quantityValues, setQuantityValues] = useState(formInitialState);

  const [bindDetails, setBindDetails] = useState({});
  const navigate = useNavigate();
  const { email } = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    bindsService
      .getOne(bindId)
      .then((result) => {
        setBindDetails(result)
        return result
      }).then((result) => {
        if (result.likedBy.includes(email)) {
          setIsLiked(true)
        }
        
      })
  
        
        
     
  }, [bindId, like]);

  const addLikeHandler = async () => {
    const result = await bindsService.addLikeToBind(bindId, email);
    setLike(true);
  };


  
  const onChange = (e) => {
    let value = e.target.value;
    console.log(e.target.name);

    setQuantityValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFomrHandler = () => {
    setQuantityValues(formInitialState);
    setErrors('');
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(quantityValues);
    

    // if (!isAuthenticated) {
    //   const alerted = alert(`You must be logged in to make an order!`);
    //   throw Error;
    // }

    // if (
    //   formValues.fullname.length < 3 ||
    //   typeof formValues.fullname != "string" ||
    //   !formValues.fullname.match(/^[a-zA-Z]+ [a-zA-Z]+$/)
    // ) {
    //   setErrors("Please enter a valid name");
    //   throw new Error("Please enter a valid name");
    // }

    // if (!formValues.timeForDelivery.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
    //   setErrors("Please enter a valid time for delivery");
    //   throw new Error("Please enter a valid time for delivery");
    // }

    try {
   
     
      let orderDetails = {}
       orderDetails.productAndQuantity= bindDetails.productName + " - " + quantityValues.quantity;
      orderDetails.email = email;
      console.log(orderDetails);
     const updateUsersOrder = await orderService.updateUserOrder(orderDetails);
    //  console.log(order._id);
      // setSuccessfulOrderModal(true)
    } catch (message) {
      console.log(message);
    }

    resetFomrHandler();
  };


  return (
    <div className="overlay">
      <div className="backdrop" onClick={hideModal}></div>
      <div className="modal11">
        <div className="user-container">
          <header className="headers">
            <h2>Order Info</h2>
            <button className="btn close" onClick={hideModal}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="https://www.svgrepo.com/svg/506648/clear/svg"
                img
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>

          <p>Продукт: {bindDetails.productName}</p>
          {/* <p>Email: {bindDetails.email}</p>
            <p>Phonenumber: {bindDetails.PhoneNumber}</p> */}
          <p>Цена: {bindDetails.price}</p>
          {/* <p>City: {bindDetails.city}</p> */}

          <p>Описание: {bindDetails.description}</p>

          <form method="POST">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="quantity">
                    Количество:
                  </label>
                  <input
                    type="text"
                    placeholder="1"
                    id="quantity"
                    name="quantity"
                    className="form-control form-control-alternative"
                    values={quantityValues.quantity}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
          </form>

          <div id="form-actions">
            <button
              id="action-save"
              className="btn"
              type="submit"
              style={{ backgroundColor: "#fd0e35" }}
              onClick={submitHandler}
            >
              Добави в количката
            </button>

            {/*          CHECKING FOR OWNERSHIP         */}

            <button
              id="action-cancel"
              className="btn"
              type="button"
              onClick={hideModal}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
