import React, { Component } from 'react';
import './App.css';

import ColorList from '../ColorLIst/ColorList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorList className="color-list" colors={colors} />
      </div>
    );
  }
}

export default App;
