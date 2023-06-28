import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){
  return (
    <React.Fragment>
      {props.itemList.map((item) => 
        <Item name={item.name}
        description={item.description}
        quantity={item.quantity}
        id={item.id}
        key={item.id}
        onBuyItem={props.onBuyItem}
        onRestockItem={props.onRestockItem}
        onItemSelect={props.onItemSelect}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onBuyItem: PropTypes.func,
  onItemSelect: PropTypes.func,
  onRestockItem: PropTypes.func,
};

export default ItemList;