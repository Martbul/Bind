import * as bindsService from "../../services/bindsService";
import { useContext, useEffect, useState } from "react";
import BindLeftSearchOptions from "./BindLeftSearchOptions";
import BindCard from "./BindCard";
import InfoModal from "./InfoModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Loader from "../loader/Loader";

import BindsContext from "../../contexts/bindsContext";
import SuccessfulAddToCartModal from "./SuccessfulAddToCartModal";
import { Link } from "react-router-dom";

export default function BindsGrid() {
  const [binds, setBinds] = useState([]);
  const [showSuccessfulAddToCartModal, setSuccessfulAddToCartModal] =
    useState(false);

  const [showMoreInfoModal, setMoreInfoModal] = useState(false);
  const [selectedBind, setSelectedBind] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const {searchproduct } = useContext(BindsContext);
  useEffect(() => {
    setIsLoading(true);
    bindsService
      .getAll()
      .then((result) => {
        const filteredBinds = result.filter((bind) =>
          bind.productName.toLowerCase().includes(searchproduct.toLowerCase())
        );
      
        setBinds(filteredBinds);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searchproduct]);

  const onBindInfoClick = async (bind_id) => {

   
    setSelectedBind(bind_id);
    
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
        {/* <div style={{ display: "flex" }}>
          <div className="col-lg-2 ">
            <Link to="/orders/order" type="submit" className="btn btn-info">
              <span className="lnr lnr-magnifier" /> Специялам поръчка
            </Link>
          </div>
          <div className="col-lg-2 ">
            <button type="submit" className="btn btn-info">
              <span className="lnr lnr-magnifier" /> Добави продукт за
              еднократна поръчка
            </button>
          </div>
        </div> */}

          <div>
            <h2>За съжаление сървърът е паднал и не можем да покажем продукти</h2>
          </div>
          <div className="parent1">
          <BindLeftSearchOptions className="child1" />

          <Row className="child2">
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
        </div>
      </Container>
    </>
  );
}
