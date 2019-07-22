import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import style from './Gallery.module.css';

const Gallery = ({ images, onClick }) => (
  <ul className={style.gallery}>
    {images.map(image => {
      return (
        <li key={image.id}>
          <PhotoCard
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            likes={image.likes}
            views={image.views}
            comments={image.comments}
            downloads={image.downloads}
            onClick={onClick}
          />
        </li>
      );
    })}
  </ul>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Gallery;
