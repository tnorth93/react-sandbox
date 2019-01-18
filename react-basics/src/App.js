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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Tom',
          age: 25,
        },
        {
          name: event.target.value,
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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Thomas!!')}>Switch Name!</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} > child </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}> second child </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Tom!')} > third child </Person>
      </div>
    );
  }
}

export default App;
