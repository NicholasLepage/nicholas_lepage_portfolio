import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from './NavBar.js'
import Intro from './Intro.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="intro">
          <Intro />
        </div>
      </div>

    );
  }
}

export default App;
