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
    this.setState({
      people: [
        {
          username: event.target.value,
        },
        {
          username: event.target.value,
        },
        {
          username: event.target.value,
        },
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <div>
          <UserOutput username={this.state.people[0].username} />
          <UserInput changed={this.userInputHandler.bind(this)}/>
        </div>
        <div>
          <UserOutput username={this.state.people[1].username} />
          <UserInput changed={this.userInputHandler.bind(this)}/>
        </div>
        <div>
          <UserOutput username={this.state.people[2].username} />
          <UserInput changed={this.userInputHandler.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
