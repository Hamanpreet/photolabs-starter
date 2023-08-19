import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";


const PhotoList = (props) => {
  const {photos, onToggleFavorite, favoritedPhotos} = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) =>{
        return <PhotoListItem photo={photo} key={photo.id}  onToggleFavorite={onToggleFavorite}
        isFavorited={favoritedPhotos.includes(photo.id)}
          />;
      })}
    </ul>
  );
};

export default PhotoList;
