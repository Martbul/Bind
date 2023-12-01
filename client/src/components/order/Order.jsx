import { useRef, useState, useEffect, useContext } from "react";
import * as orderService from '../../services/orderServices'
import SuccessfulOrderModal from './SuccessfulOrderModal';
import AuthContext from "../../contexts/authContext";
const formInitialState = {
  fullname: "",
  address: "",
  dayForDelivery: "",
  timeForDelivery: "",
  order: '',
 
};
export default function Order() {
  const [formValues, setFormValues] = useState(formInitialState)
  const [showSuccessfulOrderModal, setSuccessfulOrderModal] = useState(false)
  const [errors, setErrors] = useState('');
 const { email, username } = useContext(AuthContext);


  const changeHandler =  (e) => {
    let value = e.target.value

    setFormValues((state) => ({ 
      ...state,
      [e.target.name] : value,
    }))
  }

    const resetFomrHandler = () => {
      setFormValues(formInitialState);
      setErrors('');
    };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formValues);

    if(formValues.fullname.length < 3 || typeof(formValues.fullname) != 'string'){
      setErrors('Please enter a valid name')
      throw new Error('Please enter a valid name')
      
    }
    
    if(formValues.address.length < 5 || typeof(formValues.address) != 'string'){
      setErrors('Please enter a valid address')
      throw new Error('Please enter a valid address')
      
    }


    if(formValues.dayForDelivery.length < 5 || typeof(formValues.dayForDelivery) != 'string'){
      setErrors('Please enter a valid day for delivery')
      throw new Error('Please enter a valid day for delivery')
      
    }


    // if(formValues.timeForDelivery.length !== 5 || typeof(formValues.timeForDelivery) != 'string'){
    //   setErrors('Please enter a valid time for delivery')
    //   throw new Error('Please enter a valid time for delivery')
      
    // }


    if(formValues.order.length < 4 || typeof(formValues.order) != 'string'){
      setErrors('Please enter a valid order')
      throw new Error('Please enter a valid order')
      
    }

    if(!formValues.timeForDelivery.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)){
      setErrors('Please enter a valid time for delivery')
      throw new Error('Please enter a valid time for delivery')
    }

    try {
      formValues.email = email
      formValues.username = username;
         
      await orderService.create(formValues);
      setSuccessfulOrderModal(true)
        // navigate(`/games`)
       
    } catch (error) {
        console.log(error);
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
    {errors && (
      <div className="d11">
<p className="p11">{errors}</p>

      </div>
      
    )}


      {showSuccessfulOrderModal && (
        <SuccessfulOrderModal
          hideSuccessfulOrderModal={hideSuccessfulOrderModal}
        />
      )}

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
                      type="button"
                      defaultValue="Order"
                      onClick={
                       submitHandler
                     
                      }
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
