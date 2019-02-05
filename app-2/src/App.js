import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state ={
      avatar: ['Aang', 'Zuko','Sokka']
    }
  }


  render() {
    const display = this.state.avatar.map( (person, index) => {
      return (
        <h1>{person}</h1>
      )
    })
    return (
      <div className="App">
       {display}
      </div>
    );
  }
}

export default App;
