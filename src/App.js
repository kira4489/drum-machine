import React, { Component } from 'react';
import './App.css';
import DrumMachine from './Components/DrumMachine';

export default class App extends Component {
  render() {
    return (
    <main>
    <h1>Drum Machine</h1>
      <DrumMachine/>
    </main>
  );
}
}

