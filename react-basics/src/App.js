import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tom',
        age: 25,
      },
      { name: 'Kelly',
        age: 26,
      },
      { name: 'Beans',
        age: 3,
      },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 25,
        },
        {
          name: 'Kelly',
          age: 26,
        },
        {
          name: 'Beans',
          age: 21,
        }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler('Thomas!!')}>Switch Name!</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} > YOLO </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} > YOLO </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Tom!')} > YOLO </Person>
      </div>
    );
  }
}

export default App;
