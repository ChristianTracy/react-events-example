import React, { Component } from 'react';
import './App.css';
import GetEvent from './GetEvent';
import EventWithParams from './EventWithParams';
import Toggle from './Toggle';
import MouseEvent from './MouseEvent';


class App extends Component {

  render = () => {
    return (
      <div className="App">
        <GetEvent />
        <EventWithParams />
        <Toggle />
        <MouseEvent />
      </div>
    );
  }
}

export default App;
