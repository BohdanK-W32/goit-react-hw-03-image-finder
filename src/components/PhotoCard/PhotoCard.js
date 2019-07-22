import React from 'react';
import PropTypes from 'prop-types';
import style from './PhotoCard.module.css';

const PhotoCard = ({
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
  onClick,
}) => (
  <div className={style.photoCard}>
    <img largeImageURL={largeImageURL} src={webformatURL} alt="img" />

    <div className={style.stats}>
      <p className={style.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>

    <button type="button" className={style.fullscreenBtn} onClick={onClick}>
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PhotoCard;
