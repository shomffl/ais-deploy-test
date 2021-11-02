import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="text-green-200">tailwind import</p>
        <Button>Click!</Button>
        <Button>Click twice!</Button>
      </header>
    </div>
  );
}

export default App;
