import React from 'react';
import PropTypes from 'prop-types';

import './SearchColorForm.css';

const SearchColorForm = ({ onSearch = f => f }) => {
  const onInput = e => {
    e.preventDefault();
    onSearch(e.target.value);
  };
  return (
    <div className="SearchColorFrom">
      <input
        className="SearchColorFrom__input"
        onChange={onInput}
        type="text"
        placeholder="Search color name || #eee"
      />
    </div>
  );
};

SearchColorForm.propTypes = {
  onSearch: PropTypes.func
};

export default SearchColorForm;
