import React from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

import Color from '../Color/Color';

const Palette = ({ colors = [], onRemove = f => f, onLike = f => f }) => (
  <div className="Palette">
    {colors.length === 0 ? (
      <p>Цветов нет</p>
    ) : (
      colors.map(color => (
        <Color
          onRemove={() => onRemove(color.id)}
          onLike={like => onLike(color.id, !like)}
          key={color.id}
          {...color}
        />
      ))
    )}
  </div>
);

Palette.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Palette;
