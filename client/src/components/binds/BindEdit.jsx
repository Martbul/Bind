import { useNavigate, useParams } from 'react-router-dom';

import * as bindService from '../../services/bindsService';
import { useEffect, useState } from 'react';


const formInitialState = {
  fullname: "",
  address: "",
  dayForDelivery: "",
  timeForDelivery: "",
  order: "",
};


export default function BindEdit() {
  const navigate = useNavigate();
  const { bindId } = useParams();
  const [errors, setErrors] = useState("");
  const [bind, setBind] = useState({
    formInitialState,
  });

  useEffect(() => {
    bindService.getOne(bindId).then((result) => {
      setBind(result);
    });
  }, [bindId]);

  const editGameSubmitHandler = async (e) => {
    e.preventDefault();
    
    // const values = Object.fromEntries(new FormData(e.currentTarget));

   if (
     fullname.length < 3 ||
     typeof bind.fullname != "string" ||
     !bind.fullname.match(/^[a-zA-Z]+ [a-zA-Z]+$/)
   ) {
     setErrors("Please enter a valid name");
     throw new Error("Please enter a valid name");
   }

   if (bind.address.length < 5 || typeof bind.address != "string") {
     setErrors("Please enter a valid address");
     throw new Error("Please enter a valid address");
   }

   if (
     bind.dayForDelivery.length < 5 ||
     typeof bind.dayForDelivery != "string"
   ) {
     setErrors("Please enter a valid day for delivery");
     throw new Error("Please enter a valid day for delivery");
   }

   // if(formValues.timeForDelivery.length !== 5 || typeof(formValues.timeForDelivery) != 'string'){
   //   setErrors('Please enter a valid time for delivery')
   //   throw new Error('Please enter a valid time for delivery')

   // }

   if (bind.order.length < 4 || typeof bind.order != "string") {
     setErrors("Please enter a valid order");
     throw new Error("Please enter a valid order");
   }

   if (!bind.timeForDelivery.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
     setErrors("Please enter a valid time for delivery");
     throw new Error("Please enter a valid time for delivery");
   }
    try {
      await bindService.edit(bindId, bind);

      navigate("/binds/binds");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  const onChange = (e) => {
    setBind((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <>
      

      <section className="s12">
        <div className="container01">
          <div className="text01">Change your order</div>
          <form method="POST">
            <div className="form-row01">
              <div className="input-data">
                <input
                  type="text01"
                  id="fullname"
                  name="fullname"
                  value={bind.fullname}
                  onChange={onChange}
                />

                {errors == "Please enter a valid name" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <div className="underline" />
                <label htmlFor="fullname">Full name</label>
              </div>
              <div className="input-data">
                <input
                  type="text01"
                  id="address"
                  name="address"
                  value={bind.address}
                  onChange={onChange}
                />

                {errors == "Please enter a valid address" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}
                <div className="underline" />
                <label htmlFor="address">Address</label>
              </div>
            </div>
            <div className="form-row01">
              <div className="input-data">
                <input
                  type="text01"
                  id="dayForDelivery"
                  name="dayForDelivery"
                  value={bind.dayForDelivery}
                  onChange={onChange}
                />
                {errors == "Please enter a valid day for delivery" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <div className="underline" />
                <label htmlFor="">Preffered day for delivery</label>
              </div>
              <div className="input-data">
                <input
                  type="text01"
                  id="timeForDelivery"
                  name="timeForDelivery"
                  value={bind.timeForDelivery}
                  onChange={onChange}
                />
                {errors == "Please enter a valid time for delivery" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <div className="underline" />
                <label htmlFor="">Preffered time for delivery</label>
              </div>
            </div>
            <div className="form-row01">
              <div className="input-data textarea">
                <textarea
                  id="order"
                  name="order"
                  rows={8}
                  cols={80}
                  value={bind.order}
                  onChange={onChange}
                />
                {errors == "Please enter a valid order" && (
                  <div className="d11">
                    <p className="p11">{errors}</p>
                  </div>
                )}

                <br />
                <div className="underline" />
                <label htmlFor="">Order</label>
                <br />
                <div className="form-row01 submit-btn">
                  <div className="input-data">
                    <div className="inner" />
                    <input
                      type="button"
                      defaultValue="Change Order"
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