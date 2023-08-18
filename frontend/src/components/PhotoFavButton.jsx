import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favPhoto, setFavPhoto] = useState(false);
  const toggleFavPhoto = () => {
    setFavPhoto(prev => !prev);
  };
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavPhoto}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={favPhoto}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;

// PhotoFavButton wraps FavIcon
// I have put event handler on FavIcon
// Where is it supposed to be?
