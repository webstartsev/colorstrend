import React from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

import Color from '../Color/Color';
import AddColor from '../AddColor/AddColor';

const Palette = ({ colors = [], type = 'hex', onRate = f => f, onCopy = f => f }) => (
  <div className="Palette">
    {colors.length === 0 ? (
      <p className="Palette__notfound">Цветов нет</p>
    ) : (
      colors.map(color => (
        <Color
          onRate={() => onRate(color.id)}
          onCopy={() => onCopy(color)}
          type={type}
          key={color.id}
          {...color}
        />
      ))
    )}
    {colors.length && <AddColor />}
  </div>
);

Palette.propTypes = {
  colors: PropTypes.array.isRequired,
  type: PropTypes.string,
  onRate: PropTypes.func,
  onCopy: PropTypes.func
};

export default Palette;
