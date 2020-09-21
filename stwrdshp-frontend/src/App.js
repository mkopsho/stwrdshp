import React from 'react';
import logo from './logo.svg';
import './App.css';

function testFetch() {
  fetch('http://localhost:3000/parks')
    .then((parks) => {
      return parks.json()
    })
    .then((parks) => {
      console.log(parks)
    })
}

function App() {
  testFetch()
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
    </div>
  )
}

export default App;
