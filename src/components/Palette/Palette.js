import React from 'react';
import PropTypes from 'prop-types';
import './Palette.css';

import Color from '../Color/Color';

const Palette = ({ colors = [] }) => (
  <div className="Palette">
    {colors.map(color => (
      <Color key={color.id} {...color} />
    ))}
  </div>
);

Palette.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Palette;
