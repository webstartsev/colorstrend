import React from 'react';
import PropTypes from 'prop-types';
import './Types.css';

const Types = ({ changeType = f => f, type = 'hex' }) => (
  <div className="Types">
    <button
      className={type === 'hex' ? 'Types__btn Types__btn_active' : 'Types__btn'}
      onClick={() => changeType('hex')}
    >
      hex
    </button>
    <button
      className={type === 'rgb' ? 'Types__btn Types__btn_active' : 'Types__btn'}
      onClick={() => changeType('rgb')}
    >
      rgb
    </button>
    <button
      className={type === 'hsl' ? 'Types__btn Types__btn_active' : 'Types__btn'}
      onClick={() => changeType('hsl')}
    >
      hsl
    </button>
  </div>
);
Types.propTypes = {
  changeType: PropTypes.func,
  type: PropTypes.string
};

export default Types;
