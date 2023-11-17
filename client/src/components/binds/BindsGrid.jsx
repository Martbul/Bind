import { useEffect, useState } from "react";
import * as bindsService from '../../services/bindsService'
import BindCard from "./BindCard"


export default function BindsGrid() {
   const [binds, setBinds] = useState([])
   

   useEffect(() => {
     bindsService.getAll()
       .then((result) => setBinds(result))
       .catch((err) => console.log(err));
   }, []);


   


   return (
     <>
     

       {binds.map((bind) => (
         <BindCard
           key={bind._id}
           user_id={bind._id}
           userFullName={bind.fullname}
           userAddress={bind.address}
           dayForDelivery={bind.dayForDelivery}
         />
       ))}
     </>
   );
}