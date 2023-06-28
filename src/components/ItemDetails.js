import React from "react";
import PropTypes from "proptypes";

function ItemDetails(props) {
  const { item } = props;

  return (
    <>
    <h1>{item.name}</h1>
    <p1>Description: {item.description}</p1>
    <p1>Quantity: {item.quantity}</p1>
    <button onClick={() => props.onDeleteItem(item.id)}>Delete</button>
    </>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.object,
  onDeleteItem: PropTypes.func
}

export default ItemDetails;