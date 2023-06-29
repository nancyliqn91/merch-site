import React from "react";
import PropTypes from "prop-types";

function ReusableItemForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableItemForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableItemForm;