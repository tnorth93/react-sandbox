import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputText: '',
  };

  textChangeHandler = (event) => {
    let inputTextChange = event.target.value;
    this.setState( {inputText:inputTextChange} );
  };

  render() {
    return (
      <div className="App">
        <input type='text' onChange={this.textChangeHandler} />
        <p>{this.state.inputText.length}</p>
      </div>
    );
  }
}

export default App;
