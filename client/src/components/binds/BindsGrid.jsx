import * as bindsService from "../../services/bindsService";
import { useContext, useEffect, useState } from "react";

import BindCard from "./BindCard";
import InfoModal from "./InfoModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Loader from "../loader/Loader";

import BindsContext from "../../contexts/bindsContext";
import SuccessfulAddToCartModal from "./SuccessfulAddToCartModal";

export default function BindsGrid() {
  const [binds, setBinds] = useState([]);
  const [showSuccessfulAddToCartModal, setSuccessfulAddToCartModal] =
    useState(false);

  const [showMoreInfoModal, setMoreInfoModal] = useState(false);
  const [selectedBind, setSelectedBind] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const[isDeleted,setIsDelted] = useState(false);

  const { searchorder, searchcity, searchday } = useContext(BindsContext);
  useEffect(() => {
    setIsLoading(true);
    bindsService
      .getAll()
      .then((result) => {
        // Filter the result based on the search values
        // const filteredBinds = result.filter(
        //   (bind) =>
        //     bind.order.toLowerCase().includes(searchorder.toLowerCase()) &&
        //     bind.timeForDelivery
        //       .toLowerCase()
        //       .includes(searchcity.toLowerCase()) &&
        //     bind.dayForDelivery.toLowerCase().includes(searchday.toLowerCase())
        // );
        setBinds(result);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searchorder, searchcity, searchday, isDeleted]);

  const onBindInfoClick = async (bind_id) => {
    // console.log(bind_id);
     setIsDelted(false);
    setSelectedBind(bind_id);
    // console.log(selectedBind);
    setMoreInfoModal(true);
  };

  const hideMoreInfoModal = () => {
    setMoreInfoModal(false);
  };
  const hideMoreInfoModalAndShowSuccessfulAddToCartModal = () => {
      setSuccessfulAddToCartModal(true);
      setMoreInfoModal(false);
    };

    const rerendereletedModal = () => {
     setIsDelted(true);
  };
   const hideSuccessfulOrderModal = () => {
     setSuccessfulAddToCartModal(false);
   };

  return (
    <>
      {showSuccessfulAddToCartModal && (
        <SuccessfulAddToCartModal
          hideSuccessfulOrderModal={hideSuccessfulOrderModal}
        />
      )}
      {isLoading && <Loader />}

      {showMoreInfoModal && (
        <InfoModal
          hideModal={hideMoreInfoModal}
          rerenderDeletedModal={rerendereletedModal}
          bindId={selectedBind}
          hideAndShowModal={hideMoreInfoModalAndShowSuccessfulAddToCartModal}
        />
      )}

      <Container>
        <Row>
          {binds.map((bind) => (
            <BindCard
              key={bind._id}
              bind_id={bind._id}
              productName={bind.productName}
              image={bind.image}
              price={bind.price}
              description={bind.description}
              onBindInfoClick={onBindInfoClick}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
