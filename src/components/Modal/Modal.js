import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const Modal = ({ imgSrc, onClick }) => (
  // eslint-disable-next-line
  <div aria-label="backdrop" className={style.backdrop} onClick={onClick}>
    <img src={imgSrc} alt="large img" className={style.modal} />
  </div>
);

Modal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
