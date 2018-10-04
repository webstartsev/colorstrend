import React from 'react';
import './Logo.css';

const Logo = ({ color }) => (
  <div className="Logo">
    <div className="Logo__name">
      <span className="Logo__first">Color</span>{' '}
      <span className="Logo__last" style={{ background: color }}>
        Trends
      </span>
    </div>
  </div>
);

export default Logo;
