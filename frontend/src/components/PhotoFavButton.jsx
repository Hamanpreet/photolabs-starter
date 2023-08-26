import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFavorited, onToggleFavorite}) {
  
  const toggleFavPhoto = () => {
    onToggleFavorite();
  };
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavPhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
