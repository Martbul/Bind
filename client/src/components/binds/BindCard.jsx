function BindCard({
  image,
  productName,
  price,
  bind_id,
  description,
  onBindInfoClick,
}) {
  const addToCart = () => {
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
             
            </div>
            <div className="right">
             
              <div className="details">
                <button className='btn' onClick={addToCart}>Добави в количката</button>
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
