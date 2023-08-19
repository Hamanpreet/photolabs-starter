import {React, useState} from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, showFav, toggleShowFav }) => {

  return (
    <div className='fav-badge' onClick={toggleShowFav}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={showFav}/>
    </div>
  ) 
};

export default FavBadge;

