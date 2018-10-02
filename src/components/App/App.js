import React, { Component } from 'react';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Palette from '../Palette/Palette';
import AddColorForm from '../AddColorForm/AddColorForm';
import SearchColorForm from '../SearchColorForm/SearchColorForm';

import colors from '../../data/colors';

class App extends Component {
  render() {
    const logColor = (title, color) => {
      console.log(`TODO: add new ${title} and ${color} to the list`);
      console.log(`TODO: render UI with new Color`);
    };

    const logSearch = value => {
      console.log(`TODO: search ${value}`);
    };

    return (
      <div className="App">
        <Header>
          <Logo />
          <SearchColorForm onSearch={logSearch} />
        </Header>
        <Palette colors={colors} />
        <AddColorForm onNewColor={logColor} />
      </div>
    );
  }
}

export default App;
