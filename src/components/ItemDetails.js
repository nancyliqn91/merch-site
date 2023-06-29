import React from "react";
import PropTypes from "prop-types";

function ItemDetails(props) {
  const { item, onClickingDelete, onClickingBuy } = props;

  return (
    <React.Fragment>
    <h1>Details for: {item.name}</h1>
    <h3>Description: {item.description}</h3>
    <h3>Quantity: {item.quantity}</h3>
    <hr/>
    
    <button onClick={ props.onClickingEdit }>Update Item</button>
    <button onClick={() => onClickingDelete(item.id)}>Delete</button>

    {
    item.quantity > 0 ? (
    <button onClick={() => onClickingBuy(item.id)}>Buy</button>) : (
    <h1>{item.name} is out of stock</h1>)
    }

    </React.Fragment>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default ItemDetails;