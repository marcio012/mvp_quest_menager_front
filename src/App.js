import React, { Component } from 'react';
import './App.css';
import RespondentesList from './components/RespondentesList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Respondentes</h1>
        </header>
        <RespondentesList />
      </div>
    );
  }
}

export default App;
