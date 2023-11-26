import * as bindsService from '../../services/bindsService'
import { useContext, useEffect, useState } from "react";

import BindCard from "./BindCard"
import InfoModal from "./InfoModal"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Loader from '../loader/Loader';

import BindsContext from '../../contexts/bindsContext';


export default function BindsGrid() {
  const [binds, setBinds] = useState([])
  const { search } = useContext(BindsContext);
  const [showMoreInfoModal, setMoreInfoModal] = useState(false);
   const [selectedBind, setSelectedBind] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    setIsLoading(true);
    bindsService
      .getAll()
      .then((result) => {
        // Filter the result based on the search value
        const filteredBinds = result.filter((bind) =>
          bind.order.includes(search)
        );
        setBinds(filteredBinds);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [search]);
  
  

  const onBindInfoClick = async (bind_id) => {
   // console.log(bind_id);
    setSelectedBind(bind_id);
   // console.log(selectedBind);
    setMoreInfoModal(true);
  };


   const hideMoreInfoModal = () => {
     setMoreInfoModal(false);
   };
  
   

   return (
     <>
        {isLoading && <Loader />}


       {showMoreInfoModal && (
         <InfoModal hideModal={hideMoreInfoModal} bindId={selectedBind} />
       )}

       <Container>
         <Row>
           {" "}
           {binds.map((bind) => (
             <BindCard
               key={bind._id}
               bind_id={bind._id}
               userFullName={bind.fullname}
               userAddress={bind.address}
               dayForDelivery={bind.dayForDelivery}
               onBindInfoClick={onBindInfoClick}
             />
           ))}
         </Row>
       </Container>
     </>
   );
}