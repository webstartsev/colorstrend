import React, { Component } from 'react';
import { v4 } from 'uuid';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Palette from '../Palette/Palette';
import SearchColorForm from '../SearchColorForm/SearchColorForm';

import colorsData from '../../data/colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colorsData || [],
      limitRate: 10
    };

    this.rateColor = this.rateColor.bind(this);
    this.copyColor = this.copyColor.bind(this);
  }

  rateColor(id) {
    let { limitRate } = this.state;
    if (limitRate === 0) {
      return;
    }
    const colors = this.state.colors.map(color => {
      if (color.id !== id) {
        return color;
      } else {
        const rating = color.rating + 1;
        return {
          ...color,
          rating
        };
      }
    });
    limitRate--;

    this.setState({ colors, limitRate });
  }
  copyColor(color) {
    navigator.clipboard.writeText(color).catch(err => {
      console.log('copyColor went wrong', err);
    });
  }

  render() {
    const { colors } = this.state;
    const { rateColor, copyColor } = this;

    const logSearch = value => {
      console.log(`TODO: search ${value}`);
    };

    return (
      <div className="App">
        <Header>
          <Logo />
          <SearchColorForm onSearch={logSearch} />
        </Header>
        <Palette colors={colors} onRate={rateColor} onCopy={copyColor} />
      </div>
    );
  }
}

export default App;
