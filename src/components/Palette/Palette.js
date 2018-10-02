import React from 'react';
import './Palette.css';

import Color from '../Color/Color';

const Palette = ({ colors = [] }) => (
  <div className="Palette">
    {colors.map(color => (
      <Color key={color.id} {...color} />
    ))}
  </div>
);

export default Palette;
