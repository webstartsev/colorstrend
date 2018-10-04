import React from 'react';
import PropTypes from 'prop-types';
import './AddColor.css';

import icon from './plus.svg';

const AddColor = ({ onClick = f => f }) => (
  <div className="AddColor" onClick={onClick}>
    <img src={icon} className="AddColor__icon" />
    <span className="AddColor__text">Добавь свой цвет просто!</span>
  </div>
);

AddColor.propTypes = {
  onClick: PropTypes.func
};

export default AddColor;
