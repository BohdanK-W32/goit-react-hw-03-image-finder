import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchForm.module.css';

const SearchForm = ({ onSubmit, onChange, value }) => (
  <form onSubmit={onSubmit} className={style.searchForm}>
    <input
      type="text"
      autoComplete="off"
      placeholder="Search images..."
      onChange={onChange}
      value={value}
    />
  </form>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchForm;
