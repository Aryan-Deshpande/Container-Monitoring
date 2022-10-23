import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Postform from './Postform';


function App() {

  const [data, setData ] = useState(null);

  // use effect runs on every render
  useEffect(() => {
    axios('http://localhost:5000/landing')
      .then(res => res.json)
      .then(data => setData(data)).catch(err => console.log(err));
  }, );

  return (
    <div className="App">
      <header className="App-header">
        <Postform />
        <p> hello {data} </p>
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
  );
}

export default App;
