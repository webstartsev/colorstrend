import React from 'react';
import PropTypes from 'prop-types';

import './BtnAction.css';

const BtnAction = ({ type = '', action = f => f }) => (
  <div
    className={type !== '' ? `BtnAction BtnAction_type_${type}` : `BtnAction`}
    onClick={action}
  />
);

BtnAction.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func
};

export default BtnAction;
