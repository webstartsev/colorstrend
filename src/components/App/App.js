import React, { Component } from 'react';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Palette from '../Palette/Palette';
import SearchColorForm from '../SearchColorForm/SearchColorForm';
import OpenSource from '../OpenSource/OpenSource';
import Types from '../Types/Types';

import colorsData from '../../data/colors';

class App extends Component {
  constructor(props) {
    super(props);

    this.colors = colorsData.sort((a, b) => b.rating - a.rating);
    this.state = {
      colors: this.colors || [],
      limitRate: 10,
      topColor: this.colors[0],
      type: 'hex'
    };

    this.rateColor = this.rateColor.bind(this);
    this.copyColor = this.copyColor.bind(this);
    this.searchColor = this.searchColor.bind(this);
    this.changeType = this.changeType.bind(this);
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
    navigator.clipboard.writeText(color[this.state.type]).catch(err => {
      console.log('copyColor went wrong', err);
    });
  }

  searchColor(value) {
    if (value.length) {
      value = value.toLowerCase();
      const colors = this.colors.filter(color => {
        if (
          color.title.toLowerCase().search(value) !== -1 ||
          color.color[this.state.type].toLowerCase().search(value) !== -1
        ) {
          return true;
        }
      });
      this.setState({ colors });
    } else {
      this.setState({ colors: this.colors });
    }
  }

  changeType(type) {
    this.setState({ type });
  }

  render() {
    const { colors, topColor, type } = this.state;
    const { rateColor, copyColor, searchColor, changeType } = this;

    return (
      <div className="App">
        <Header>
          <Logo color={topColor.color[type]} />
          <SearchColorForm onSearch={searchColor} />
          <Types changeType={changeType} type={type} />
          <OpenSource />
        </Header>
        <Palette colors={colors} type={type} onRate={rateColor} onCopy={copyColor} />
      </div>
    );
  }
}

export default App;
