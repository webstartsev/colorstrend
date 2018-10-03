import React, { Component } from 'react';
import { v4 } from 'uuid';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Palette from '../Palette/Palette';
import AddColorForm from '../AddColorForm/AddColorForm';
import SearchColorForm from '../SearchColorForm/SearchColorForm';

import colorsData from '../../data/colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colorsData || [],
      limitRate: 10
    };

    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.copyColor = this.copyColor.bind(this);
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ];
    this.setState({ colors });
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
  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  }
  copyColor(color) {
    navigator.clipboard.writeText(color).catch(err => {
      console.log('copyColor went wrong', err);
    });
  }

  render() {
    const { colors } = this.state;
    const { addColor, rateColor, removeColor, copyColor } = this;

    const logSearch = value => {
      console.log(`TODO: search ${value}`);
    };

    return (
      <div className="App">
        <Header>
          <Logo />
          <SearchColorForm onSearch={logSearch} />
        </Header>
        <Palette colors={colors} onRate={rateColor} onRemove={removeColor} onCopy={copyColor} />
        <AddColorForm onNewColor={addColor} />
      </div>
    );
  }
}

export default App;
