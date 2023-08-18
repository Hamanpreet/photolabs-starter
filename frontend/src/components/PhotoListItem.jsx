import React from "react";

import "../styles/PhotoListItem.scss";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import FavIcon from "./FavIcon";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {
  const {location, urls, user} = {...props};


  return (
    <section>
      <div>
      <PhotoFavButton />
      </div>
        <img src={urls.regular} alt="photo" className="photo-list__image"/>
        
      <div className="photo-list__user-details">
        <img src={user.profile} alt="profile photo" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{user.username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
