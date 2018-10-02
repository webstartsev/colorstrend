import React from 'react';
import PropTypes from 'prop-types';

import './Like.css';

const Like = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? 'Like Like_selected' : 'Like'} onClick={onClick} />
);

Like.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Like;
