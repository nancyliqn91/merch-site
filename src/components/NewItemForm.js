import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value, 
      description: event.target.description.value, 
      quantity: parseInt(event.target.quantity.value), 
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='sweatshirt'
          className='form-control' />
        <textarea
        type='text'
          name='description'
          placeholder='Size L crewneck'
          className='form-control' />
        <input
          type='number'
          name='quantity'
          placeholder='10' 
          className='form-control'/>
        <button type='submit'>Add to inventory</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;