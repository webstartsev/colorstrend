import React, { Component } from 'react';

import Palette from '../Palette/Palette';

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
        <Palette colors={colors} />
      </div>
    );
  }
}

export default App;
