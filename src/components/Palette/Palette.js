import React from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

import Color from '../Color/Color';

const Palette = ({ colors = [], onRemove = f => f, onRate = f => f, onCopy = f => f }) => (
  <div className="Palette">
    {colors.length === 0 ? (
      <p>Цветов нет</p>
    ) : (
      colors.map(color => (
        <Color
          onRemove={() => onRemove(color.id)}
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
  onRemove: PropTypes.func,
  onRate: PropTypes.func,
  onCopy: PropTypes.func
};

export default Palette;
