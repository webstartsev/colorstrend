import React, { Component } from 'react';
import { v4 } from 'uuid';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Palette from '../Palette/Palette';
import AddColorForm from '../AddColorForm/AddColorForm';
import SearchColorForm from '../SearchColorForm/SearchColorForm';

// import colors from '../../data/colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
    this.LikeColor = this.LikeColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
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

  LikeColor(id, like) {}
  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  }

  render() {
    const { colors } = this.state;

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
        <AddColorForm onNewColor={this.addColor} />
      </div>
    );
  }
}

export default App;
