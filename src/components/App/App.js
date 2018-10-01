import React, { Component } from 'react';
import './App.css';

import ColorList from '../ColorLIst/ColorList';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';

import colors from '../../data/colors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Logo />
        </Header>
        <ColorList className="color-list" colors={colors} />
      </div>
    );
  }
}

export default App;
