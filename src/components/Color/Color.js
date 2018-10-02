import React from 'react';
import './Color.css';

const Color = ({ title, color, rating }) => (
  <div className="Color" style={{ background: color }}>
    <span className="Color__rating">{rating}</span>
    <a className="Color__copy" href="javascript:;">
      COPY
    </a>
    <span className="Color__title">{title}</span>
  </div>
);

export default Color;
