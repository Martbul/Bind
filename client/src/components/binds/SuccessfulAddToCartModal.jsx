import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function SuccessfulAddToCartModal({ hideSuccessfulOrderModal }) {
  return (
    <div className="overlay">
      <div className="backdrop" onClick={hideSuccessfulOrderModal}></div>
      <div className="modal11">
        <div className="user-container">
          <header className="headers">
            <h2>Order Info</h2>
          </header>
          {/* <p>Продукт: {bindDetails.productName}</p>
         
          
          // <p>Цена: Uspe[no do</p>
        
          <p>Описание: {bindDetails.description}</p> */}
          <p>Успешно добавихте продукт в количката си</p>
          <p>Отидете в количката за да зададете ден и час и да потвърдите доставката.</p>
          <div id="form-actions">
            <button
              className="btn"
              onClick={hideSuccessfulOrderModal}
              type="submit"
            >
              OK
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
}