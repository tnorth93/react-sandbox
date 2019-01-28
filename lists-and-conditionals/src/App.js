import React, { Component } from 'react';
import './App.css';
import Validation from './components/validation';
import Char from './components/char';

class App extends Component {
  state = {
    inputText: '',
  };

  textChangeHandler = (event) => {
    this.setState({inputText: event.target.value});
    if (this.state.inputLength >= 5) {
      let inputValidation = true;
      this.setState({inputValidation: inputValidation})
    }
  };

  deleteClickedCharacter = (index) => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const newText = text.join('');
    this.setState({inputText: newText});
  };

  render() {
    const charList = this.state.inputText.split('').map((character, index) => {
      return <Char character={character}
                   key={index}
                   clicked={() => this.deleteClickedCharacter(index)}/>
    });

    return (
      <div className="App">
        <input type='text'
               onChange={this.textChangeHandler}
               value={this.state.inputText} />
        <p>{this.state.inputText}</p>
        <Validation inputLength={this.state.inputText.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
