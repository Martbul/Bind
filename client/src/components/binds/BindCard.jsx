import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BindCard({
  image,
  productName,
  price,
  bind_id,
  description,
  onBindInfoClick,
}) {
  const infoClickHandler = () => {
    window.scrollTo(0, 0);
    onBindInfoClick(bind_id);
  };
  return (
    <>
      <div className="wrapper">
        <div className="">
          <div className="top" />
          <div className="bottom">
            <img src={image} alt="" />
            <div className="left">
              <div className="details">
                <h4>{productName}</h4>
                <p>{price}</p>
              </div>
              <div className="buy">
                <i className="material-icons">add_shopping_cart</i>
              </div>
            </div>
            <div className="right">
              <div className="done">
                <i className="material-icons">done</i>
              </div>
              <div className="details">
                <button onClick={infoClickHandler}>Добави в количката</button>
                <p>Added to your cart</p>
              </div>
              <div className="remove">
                <i className="material-icons">clear</i>
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <i className="material-icons">Инфо</i>
          </div>
          <div className="contents">
            <table>
              <tbody>
                <tr>
                  <th>{description}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default BindCard;
