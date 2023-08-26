import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {
    photos,
    onToggleFavorite,
    favoritedPhotos,
    setModalVisible,
    setSelectedPhoto,
  } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <PhotoListItem
            photo={photo}
            key={photo.id}
            onToggleFavorite={onToggleFavorite}
            isFavorited={favoritedPhotos.some((el) => el.id === photo.id)}
            setModalVisible={setModalVisible}
            setSelectedPhoto={setSelectedPhoto}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
