import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import EditItemForm from './EditItemForm';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null,
      editing: false,
    };
  }
  
  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
      .filter(item => item.id !== this.state.selectedItem.id)  
      .concat(itemToEdit); 
    this.setState({
        mainItemList: editedMainItemList,
        editing: false,
        selectedItem: null
      });
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    })
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  handleChangeSelectItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleBuyClick = () => {
    const selectedItem = this.state.selectedItem;

    if (selectedItem.quantity > 0) {
    this.setState({mainItemList: this.state.mainItemList.filter(item => item.id !== selectedItem.id).concat({...selectedItem, quantity: selectedItem.quantity - 1}), selectedItem: null})
    }
  }

  // handleBuyItem = () => {
  //   selectedItem.quantity -= 1;
  //   const remainItemList = this.state.mainItemList
  //     .filter(item => item.id !== this.state.selectedItem.id)  
  //     .concat(selectedItem); 

  //   this.setState({
  //       mainItemList: remainItemList,
  //       editing: false,
  //       selectedItem: null
  //     });
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditItemForm item = {this.state.selectedItem} onEditItem = {this.handleEditingItemInList} />
      );
      buttonText = 'Return to Item List';
    } 
    else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetails item={this.state.selectedItem} onClickingDelete={this.handleDeletingItem} onClickingEdit={this.handleEditClick}  onClickingBuy={this.handleBuyClick}
      />

      buttonText = "Return to Item List";
    } 
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleNewItemToList} />;

      buttonText = "Return to Item List"; 
    } 
    else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onItemSelect={this.handleChangeSelectItem}/>;
      buttonText = "add item";
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