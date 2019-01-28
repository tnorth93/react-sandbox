import React, { Component } from 'react';
import './App.css';
import Validation from './components/validation';

class App extends Component {
  state = {
    inputText: '',
    inputValidation: false,
  };

  textChangeHandler = (event) => {
    this.setState({inputText: event.target.value});
    if (this.state.inputLength >= 5) {
      let inputValidation = true;
      this.setState({inputValidation: inputValidation})
    }
  };

  render() {
    return (
      <div className="App">
        <input type='text'
               onChange={this.textChangeHandler}
               value={this.state.inputText} />
        <p>{this.state.inputText}</p>
        <Validation inputLength={this.state.inputText.length}/>
      </div>
    );
  }
}

export default App;
