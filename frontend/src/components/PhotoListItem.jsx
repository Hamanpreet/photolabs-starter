import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const {location, 
    imageSource,username,profile} = {...props};
  return (
    <section className="photo-list__item">
      <img src={imageSource} alt="photo" className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={profile} alt="profile photo" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
