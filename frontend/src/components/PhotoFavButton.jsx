import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({isFavorited, onToggleFavorite, showFav}) {
  
  const [favPhoto, setFavPhoto] = useState(false);
  const toggleFavPhoto = () => {
    setFavPhoto(prev => !prev);
    onToggleFavorite();
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

