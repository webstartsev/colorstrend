import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Color.css';

import Like from '../Like/Like';

const Color = ({ title, color, rating = 0, like = false, onRemove = f => f, onLike = f => f }) => (
  <div className="Color" style={{ background: color }}>
    <button className="Color__remove" onClick={onRemove}>
      X
    </button>
    <span className="Color__rating">{rating}</span>
    <a className="Color__copy" href="javascript:;">
      COPY
    </a>
    <span className="Color__title">{title}</span>
    <div className="Color__actions">
      <Like selected={like} onLike={onLike} />
    </div>
  </div>
);

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default Color;
