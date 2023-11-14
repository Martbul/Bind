import { useRef, useState, useEffect } from "react";

const formInitialState = {
  fullname: "",
  address: "",
  dayForDelivery: "",
  timeForDelivery: "",
  order: '',
 
};
export default function Order() {
  const [formValues, setFormValues] = useState(formInitialState)
  const [errors, setErrors] = useState({});


  const changeHandler = (e) => {
    let value = e.target.value

    setFormValues((state) => ({ 
      ...state,
      [e.target.name] : value,
    }))
  }

    const resetFomrHandler = () => {
      setFormValues(formInitialState);
      setErrors({});
    };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);

    resetFomrHandler();
  };




  return (
    <section className="s11">
      <div className="container00">
        <div className="text00">Make an Order</div>
        <form method="POST">
          <div className="form-row00">
            <div className="input-data">
              <input
                type="text00"
                id="fullname"
                name="fullname"
                value={formValues.fullname}
                onChange={changeHandler}
              />
              <div className="underline" />
              <label htmlFor="fullname">Full name</label>
            </div>
            <div className="input-data">
              <input
                type="text00"
                id="address"
                name="address"
                value={formValues.address}
                onChange={changeHandler}
              />
              <div className="underline" />
              <label htmlFor="address">Address</label>
            </div>
          </div>
          <div className="form-row00">
            <div className="input-data">
              <input
                type="text00"
                id="dayForDelivery"
                name="dayForDelivery"
                value={formValues.dayForDelivery}
                onChange={changeHandler}
              />
              <div className="underline" />
              <label htmlFor="">Preffered day for delivery</label>
            </div>
            <div className="input-data">
              <input
                type="text00"
                id="timeForDelivery"
                name="timeForDelivery"
                value={formValues.timeForDelivery}
                onChange={changeHandler}
              />
              <div className="underline" />
              <label htmlFor="">Preffered time for delivery</label>
            </div>
          </div>
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
              <br />
              <div className="underline" />
              <label htmlFor="">Order</label>
              <br />
              <div className="form-row00 submit-btn">
                <div className="input-data">
                  <div className="inner" />
                  <input
                    type="submit"
                    defaultValue="Order"
                    onClick={submitHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
