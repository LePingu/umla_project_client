import React, { Component } from 'react';
import Routes from "./routing//Routes";
import './App.css';
import Navig from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div>
        <Navig/>
        <Routes />
      </div>
    );
  }
}

export default App;
