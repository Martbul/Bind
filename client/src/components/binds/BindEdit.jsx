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

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.edit(gameId, values);

            navigate('/games');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };






   return (
     <section className="s11">
       <div className="container00">
         <div className="text00">Make an Order</div>
         <form method="POST" onSubmit={editGameSubmitHandler}>
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
                     defaultValue="Edit Order"

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