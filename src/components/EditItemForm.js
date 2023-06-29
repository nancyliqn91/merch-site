import React from "react";
import ReusableItemForm from "./ReusableItemForm";
import PropTypes from "prop-types";

function EditItemForm(props){
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: item.id});
  }

  return (
    <React.Fragment>
      <ReusableItemForm 
        formSubmissionHandler={handleEditItemFormSubmission} 
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditItemForm;