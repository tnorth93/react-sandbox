import React from 'react';

const userInput = (props) => {
  return (
    <div className="userInput">
      <input type="text" onChange={props.changed} value={props.username}/>
    </div>

  )
};

  export default userInput;