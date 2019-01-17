import React, { Component } from 'react';
import Navigation from './Navigation'
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
      </div>
    );
  }
}

export default App;
