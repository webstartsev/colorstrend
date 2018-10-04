import React from 'react';
import PropTypes from 'prop-types';

import './SearchColorForm.css';

const SearchColorForm = ({ onSearch = f => f }) => {
  const onInput = e => {
    e.preventDefault();
    onSearch(e.target.value);
  };
  return <input onChange={onInput} type="text" placeholder="Search color Name || #eee" />;
};

SearchColorForm.propTypes = {
  onSearch: PropTypes.func
};

export default SearchColorForm;
