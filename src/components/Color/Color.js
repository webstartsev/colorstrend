import React from 'react';
import PropTypes from 'prop-types';

import './Color.css';

import BtnAction from '../BtnAction/BtnAction';

const Color = ({
  title,
  color,
  rating = 0,
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
      <BtnAction type="like" action={onRate} />
      <BtnAction type="remove" action={onRemove} />
    </div>
  </div>
);

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func,
  onCopy: PropTypes.func
};

export default Color;
