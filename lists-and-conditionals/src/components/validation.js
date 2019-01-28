import React from 'react';

const validationComponent = (props) => {

  return (
    <div className='ValidationComponent'>
      {
        props.inputLength >= 5 ? <p>Text Long Enough!</p>:<p>Text Too Short!</p>
      }
    </div>
  )
};

export default validationComponent;
