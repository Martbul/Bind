import * as bindsService from '../../services/bindsService'
import { useEffect, useState } from "react";

import BindCard from "./BindCard"
import InfoModal from "./InfoModal"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function BindsGrid() {
   const [binds, setBinds] = useState([])
   

   useEffect(() => {
     bindsService.getAll()
       .then((result) => setBinds(result))
       .catch((err) => console.log(err));
   }, []);

  
  const [showMoreInfoModal, setMoreInfoModal] = useState(false);
  

   const createMoreInfoModal = () => {
     setMoreInfoModal(true);
   };

   const hideMoreInfoModal = () => {
     setMoreInfoModal(false);
   };
  
   

   return (
     <>
       {showMoreInfoModal && <InfoModal hideModal={hideMoreInfoModal} />}

       <Container>
         <Row
          
         >
           {" "}
           {binds.map((bind) => (
             <BindCard
               
               key={bind._id}
               user_id={bind._id}
               userFullName={bind.fullname}
               userAddress={bind.address}
               dayForDelivery={bind.dayForDelivery}
               createMoreInfoModal={createMoreInfoModal}
             />
           ))}
         </Row>
       </Container>
     </>
   );
}