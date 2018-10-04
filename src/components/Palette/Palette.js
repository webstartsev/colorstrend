import React from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

import Color from '../Color/Color';

const Palette = ({ colors = [], onRate = f => f, onCopy = f => f }) => (
  <div className="Palette">
    {colors.length === 0 ? (
      <p>Цветов нет</p>
    ) : (
      colors.map(color => (
        <Color
          onRate={() => onRate(color.id)}
          onCopy={() => onCopy(color.color)}
          key={color.id}
          {...color}
        />
      ))
    )}
  </div>
);

Palette.propTypes = {
  colors: PropTypes.array.isRequired,
  onRate: PropTypes.func,
  onCopy: PropTypes.func
};

export default Palette;
