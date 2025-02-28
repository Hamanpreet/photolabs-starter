import React from "react";

import "../styles/PhotoListItem.scss";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    photo,
    isFavorited,
    onToggleFavorite,
    setModalVisible,
    setSelectedPhoto,
  } = props;

  const handleModal = () => {
    setModalVisible(true);
    const selectedPhotoData = {
      ...photo,
      regularImageUrl: photo.urls.regular,
      similarPhotos: photo.similar_photos,
      username:photo.user.username,
      name: photo.user.name,
      profile: photo.user.profile,
      city:photo.location.city,
      country:photo.location.country
    };

    setSelectedPhoto(selectedPhotoData);
  };

  return (
    <section>
      <div>
        <PhotoFavButton
          isFavorited={isFavorited}
          onToggleFavorite={() => onToggleFavorite(photo.id)}
        />
      </div>
      <img
        src={photo.urls.regular}
        alt="photo"
        className="photo-list__image"
        onClick={handleModal}
      />

      <div className="photo-list__user-details">
        <img
          src={photo.user.profile}
          alt="profile photo"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <p>{photo.user.username}</p>
          <p className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
