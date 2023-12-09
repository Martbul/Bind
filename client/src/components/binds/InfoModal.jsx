import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as bindsService from "../../services/bindsService";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

const bindDetailsFormKeys = {
  Name: "name",
  Email: "email",
  PhoneNumber: "phoneNumber",
  DayAndTimeForDelivery: "dayAndTimeForDelivery",
  City: "city",
  StreetAndNumber: "streetAndNumber",
  Order: "order",
};

export default function InfoModal({ hideModal, rerenderDeletedModal,bindId }) {
  const [bindDetails, setBindDetails] = useState({});
  const navigate = useNavigate();
  const { email } = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const [isLiked,setIsLiked] = useState(false);

  useEffect(() => {
    bindsService
      .getOne(bindId)
      .then((result) => {
        setBindDetails(result)
    return result
      }).then((result) => {
        if (result.likedBy.includes(email)){
          setIsLiked(true)
        }
        
  })
  
        
        
     
  }, [bindId, like]);

  const addLikeHandler = async () => {
    const result = await bindsService.addLikeToBind(bindId, email);
    setLike(true);
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete this order`);

    if (hasConfirmed) {
      const result = await bindsService.remove(bindId);


//! new code
   //   await bindsService.removeFromUserOrders(bindId, email)
      
      console.log("deleted result=  " + result);

      hideModal();
      //navigate("/");
      rerenderDeletedModal()
    }
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

          <p>Name: {bindDetails.fullname}</p>
          {/* <p>Email: {bindDetails.email}</p>
            <p>Phonenumber: {bindDetails.PhoneNumber}</p> */}
          <p>
            Day and time for delivery: {bindDetails.dayForDelivery}{" "}
            {bindDetails.timeForDelivery}
          </p>
          {/* <p>City: {bindDetails.city}</p> */}
          <p>Address: {bindDetails.address}</p>
          <p>Order: {bindDetails.order}</p>
          <p>Likes: {bindDetails.likes}</p>

          <div id="form-actions">
            {email !== bindDetails._ownerEmail &&
              !isLiked &&(
                // <button
                //   id="action-save"
                //   className="btn"
                //   type="submit"
                //   style={{ backgroundColor: "purple" }}
                // >
                //   Deliver
                // </button>
                <button
                  id="action-save"
                  className="btn"
                  type="submit"
                  style={{ backgroundColor: "#fd0e35" }}
                  onClick={addLikeHandler}
                >
                  Like
                </button>
              )}
            
                {email !== bindDetails._ownerEmail && isLiked && (
              // <button
              //   id="action-save"
              //   className="btn"
              //   type="submit"
              //   style={{ backgroundColor: "purple" }}
              // >
              //   Deliver
              // </button>
              <button
              id="action-save"
              className="btn"
              type="submit"
              style={{ backgroundColor: "#898989" }}
              onClick={addLikeHandler}
            >
              Liked
            </button>
            )} 

            {/*          CHECKING FOR OWNERSHIP         */}
            {email === bindDetails._ownerEmail && (
              <>
                <Link
                  id="action-save"
                  className="btn"
                  type="submit"
                  to={pathToUrl(Path.OrderEdit, { bindId })}
                >
                  Edit
                </Link>

                <button
                  id="action-save"
                  className="btn"
                  type="submit"
                  style={{ backgroundColor: "#C20003" }}
                  onClick={deleteButtonClickHandler}
                >
                  Delete
                </button>
              </>
            )}

            <button
              id="action-cancel"
              className="btn"
              type="button"
              onClick={hideModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
