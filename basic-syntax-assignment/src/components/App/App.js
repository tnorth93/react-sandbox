import React, { Component } from 'react';
import './App.css';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';

class App extends Component {

  state = {
    people: [
      {
        username: 'Tom'
      },
      {
        username: 'Kelly'
      },
      {
        username: 'Nero Beans'
      },
    ]
  };

  userInputHandler = (event) => {
    
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.people[0].username} />
        <UserOutput username={this.state.people[1].username} />
        <UserOutput username={this.state.people[2].username} />
        <UserInput />
      </div>
    );
  }
}

export default App;
