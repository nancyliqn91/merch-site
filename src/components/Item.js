import React from "react";
import PropTypes from "prop-types";

function Item(props){
  
  function handleClick() {
    return props.purchaseItem(props.id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    return props.onRestockItem(props.id, parseInt(event.target.quantity.value))
  }

  let itemDisplay = null;
  if (props.quantity <= 0) {
    itemDisplay = <p>{props.name} is outof stock</p>
  } else {
    itemDisplay =
    <>
    <h1>{props.name}</h1>
    <li>Description: {props.description}</li>
    <li>Quantity: {props.quantity}</li>
    <button onClick={handleClick}>Buy</button>
    </>
  }
  

  return (
    <React.Fragment>
      <div onClick={() => props.onItemSelect(props.id)}>
        {itemDisplay}
        <form onSubmit={handleSubmit}>
          <input type='number' min='1' max='50' name='quantity' className='form-control'/>
        </form>

      </div>
      <h3>{props.name}</h3>
      <h5>Description: {props.description}</h5>
      <h5>Stock Quantity: {props.quantity}</h5>
      {/* <button>buy item</button> */}
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string
};

export default Item;