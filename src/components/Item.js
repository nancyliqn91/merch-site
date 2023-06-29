import React from "react";
import PropTypes from "prop-types";

function Item(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <h3>{props.name} - {props.description}</h3>
      <p><em>{props.quantity}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
  // onBuyItem: PropTypes.func,
  // onRestockItem: PropTypes.func,
  // onItemSelect: PropTypes.func
};

export default Item;

