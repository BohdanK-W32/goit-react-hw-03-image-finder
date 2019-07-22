import React from 'react';
import PropTypes from 'prop-types';
import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <div className={style.wrapper}>
    <button type="button" className={style.btn} onClick={onClick}>
      Load more...
    </button>
  </div>
);

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
