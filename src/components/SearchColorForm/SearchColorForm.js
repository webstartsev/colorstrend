import React from 'react';
import PropTypes from 'prop-types';

import './SearchColorForm.css';

const SearchColorForm = ({ onSearch = f => f }) => {
  const onInput = e => {
    e.preventDefault();
    if (e.target.value.length > 2) {
      onSearch(e.target.value);
    }
  };
  return <input onChange={onInput} type="text" placeholder="Search color Name || #eee" />;
};

SearchColorForm.propTypes = {
  onSearch: PropTypes.func
};

export default SearchColorForm;
