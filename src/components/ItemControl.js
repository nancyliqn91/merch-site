import React from 'react';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      itemList: [] 
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const newItemList = this.state.itemList.concat(newItem);
    this.setState({
      itemList: newItemList,
      formVisibleOnPage: false
    });
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.itemList} />;
      buttonText = "Add item"; 
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ItemControl; 