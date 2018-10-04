import React from 'react';
import PropTypes from 'prop-types';
import './AddColor.css';

const AddColor = ({ onClick = f => f }) => <div className="AddColor" onClick={onClick} />;

AddColor.propTypes = {
  onClick: PropTypes.func
};

export default AddColor;
