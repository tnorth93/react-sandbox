import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

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
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
