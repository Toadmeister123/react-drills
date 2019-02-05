import React, { Component } from 'react';
import Todo from './components/Todo'
import './App.css';

class App extends Component {
  super()

  this.state = {
    list: [],
    userInput: ``
  }
  render() {
    return (
      <div className="App">
      <h1>My to-do list:</h1>
      <Todo />
      <input />
      </div>
    );
  }
}

export default App;
