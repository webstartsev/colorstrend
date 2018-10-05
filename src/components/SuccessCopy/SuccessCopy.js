import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SuccessCopy.css';

const SuccessCopy = ({ color = '', text = '', type = 'hex' }) => {
  return (
    <div className="SuccessCopy SuccessCopy_animate" style={{ background: color.color[type] }}>
      <div className="SuccessCopy__wrap SuccessCopy__wrap_animate">
        <div className="SuccessCopy__text">{text}</div>
        <div className="SuccessCopy__title">{color.color[type]}</div>
      </div>
    </div>
  );
};

SuccessCopy.propTypes = {
  color: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.string
};

export default SuccessCopy;
