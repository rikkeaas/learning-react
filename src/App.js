import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rikke er kul.
        </p>
        <a
          className="App-link"
          href="https://nrk.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the news
        </a>
      </header>
    </div>
  );
}

export default App;
