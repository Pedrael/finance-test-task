import logo from './logo.svg';
import './App.css';

import React from 'react';
import Ticker from './ticker/Ticker';
import makeShit from './store/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Ticker name = {"Pedrael"}/>
      {makeShit()}
    </div>
  );
}

export default App;
