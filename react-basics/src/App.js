import React, { Component } from 'react';
import styles from './App.module.css';
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

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      // Again, this spread operator is making a copy of the object
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons} );
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
    

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (

      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>Hello</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
