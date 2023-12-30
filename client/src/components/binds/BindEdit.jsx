import { useNavigate, useParams } from 'react-router-dom';
import * as profileService from "../../services/profileService";
import * as bindService from '../../services/bindsService';
import { useEffect, useState } from 'react';
import { useContext } from "react";
import ProfileContext from "../../contexts/profileContext";

import AuthContext from "../../contexts/authContext";
const formInitialState = {
  order: "",
};


export default function BindEdit() {


  const navigate = useNavigate();
  const { bindId } = useParams();
  const [errors, setErrors] = useState("");
 

    let {
      userOrder
    } = useContext(ProfileContext);

  const [order, setOrder] = useState({
   
    userOrder,

  });



  const editGameSubmitHandler = async (e) => {
    e.preventDefault();
    
    // const values = Object.fromEntries(new FormData(e.currentTarget));

   

  //  if (bind.order.length < 4 || typeof bind.order != "string") {
  //    setErrors("Please enter a valid order");
  //    throw new Error("Please enter a valid order");
  //  }

  //  if (!bind.timeForDelivery.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
  //    setErrors("Please enter a valid time for delivery");
  //    throw new Error("Please enter a valid time for delivery");
  //  }
    try {
      await bindService.edit(bindId, userOrder);

      navigate("/binds/binds");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  const onChange = (e) => {
    setOrder((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <>
      <section className="s12">
        <div className="container01">
          <div className="text01">Редактирай поръчката си</div>
          <form method="POST">
            <div className="form-row01">
              <div className="input-data textarea">
                <textarea
                  id="order"
                  name="order"
                  rows={8}
                  cols={80}
                  values={order.userOrder}
                  onChange={onChange}
                />
                {errors == "Please enter a valid order" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <br />
                <div className="underline" />
                <label htmlFor="">Поръчка</label>
                <br />
                <div className="form-row01 submit-btn">
                  <div className="input-data">
                    <div className="inner" />
                    <input
                      type="button"
                      defaultValue="Запази"
                      onClick={editGameSubmitHandler}
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