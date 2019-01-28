import React from 'react';

const validationComponent = (props) => {

  let validationMessage = 'Text Too Short!';
  if (props.inputLength >= 5) {
    validationMessage = 'Text Long Enough!';
  }

  return (
    <div className='ValidationComponent'>
      <p>{validationMessage}</p>
    </div>
  )
};

export default validationComponent;
