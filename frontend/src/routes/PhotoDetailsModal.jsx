import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoListItem from "components/PhotoListItem";

const PhotoDetailsModal = ({
  setModalVisible,
  selectedPhoto,
  favoritedPhotos,
  showFav,
  toggleFavorite,
}) => {
  const closeModal = () => {
    setModalVisible(false);
  };

  const similarPhotosArray = Object.values(selectedPhoto.similarPhotos);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div className="fav-button-container">
          <PhotoFavButton
            isFavorited={favoritedPhotos.some(
              (photo) => photo.id === selectedPhoto.id
            )}
            onToggleFavorite={() => toggleFavorite(selectedPhoto.id)}
            showFav={showFav}
            className="fav-button"
          />
        </div>

        <img
          src={selectedPhoto.regularImageUrl}
          className="photo-details-modal__image"
        />
        <div className="modal__user-details">
          <img
            className="modal__user-profile"
            src={selectedPhoto.profile}
            alt={"profile img for " + selectedPhoto.username}
          />
          <div>
            <p className="modal__user-info">{selectedPhoto.username}</p>
            <p className="modal__user-info modal__user-location ">
              {selectedPhoto.city + ", "}
              {selectedPhoto.country}
            </p>
          </div>
        </div>

        <p className="photo-details-modal__header">Similar Photos</p>
        <PhotoList
          photos={similarPhotosArray}
          favoritedPhotos={favoritedPhotos}
          onToggleFavorite={toggleFavorite}
          className="photo-list"
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
