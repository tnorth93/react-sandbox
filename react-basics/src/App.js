import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tom',
        age: 25,
        id: 'asfa1',
      },
      { name: 'Kelly',
        age: 26,
        id: '45tr432',
      },
      { name: 'Beans',
        age: 3,
        id: 'tg5t346',
      },
    ],
    otherState: 'some other value',
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    // slice method called without args simply returns a new copy of the array
    // const persons = this.state.persons.slice();
    // this spread method is an ES6 addition that will do the same thing as slice, better practice to do it this way
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
