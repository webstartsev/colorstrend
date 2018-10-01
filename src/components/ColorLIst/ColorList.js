import React from 'react';
import './ColorList.css';

import Color from '../Color/Color';

const ColorList = ({ colors = [] }) => {
  const colorPack = colors.map(color => <Color key={color.id} {...color} />);
  return <div className="ColorList">{colorPack}</div>;
};

export default ColorList;
