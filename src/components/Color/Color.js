import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Color.css';

const Color = ({
  title,
  color,
  rating = 0,
  like = false,
  onRemove = f => f,
  onRate = f => f,
  onCopy = f => f
}) => (
  <div className="Color" style={{ background: color }}>
    <span className="Color__rating">{rating}</span>
    <a className="Color__copy" href="javascript:;" onClick={onCopy}>
      COPY
    </a>
    <span className="Color__title">{title}</span>
    <div className="Color__actions">
      <div className="Color__action Color__action_type_like" onClick={onRate} />
      <div className="Color__action Color__action_type_remove" onClick={onRemove} />
    </div>
  </div>
);

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default Color;
