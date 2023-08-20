import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const {photos, onToggleFavorite, favoritedPhotos, setModalVisible} = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) =>{
        return <PhotoListItem photo={photo} key={photo.id}  onToggleFavorite={onToggleFavorite}
        isFavorited={favoritedPhotos.includes(photo.id)}
        setModalVisible={setModalVisible}/>;
      })}
    </ul>
  );
};

export default PhotoList;
