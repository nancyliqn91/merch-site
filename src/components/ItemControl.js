import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null 
    };
  }

  handleNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  handleBuyItem = (id) => {
    let selectedItem = this.state.mainItemList.find(item => item.id === id);
    selectedItem.quantity -= 1;
    const newMainItemList = this.state.mainItemList.map((item) => { return item.id === id ? selectedItem : item});
    this.setState({mainItemList: newMainItemList});
  }

  handleRestockItem = (id, stock) => {
    let selectedItem = this.state.mainItemList.find(item => item.id === id);
    selectedItem.quantity += stock;
    const newMainItemList = this.state.mainItemList.map((item => { return item.id === id? selectedItem : item}));
    this.setState({mainItemList: newMainItemList});

  }

  handleChangeSelectItem = (id) => {
    const selectedItem = this.state.mainItemList.find(item => item.id === id);
    this.setState({selectedItem: selectedItem});
  }

  handleDeleteItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    })
  }
  
  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetails item={this.state.selectedItem} onDeleteItem={this.handleDeleteItem}/>
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleNewItemToList} />;
      buttonText = "Return to Item List"; 
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onBuyItem={this.handleBuyItem} onRestockItem={this.handleRestockItem} onItemSelect={this.handleChangeSelectItem}/>;
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