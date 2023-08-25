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
      {/* <PhotoListItem photo={selectedPhoto} key={selectedPhoto.id}  onToggleFavorite={toggleFavorite}
        isFavorited={favoritedPhotos.includes(selectedPhoto.id)}
        setModalVisible={setModalVisible}
        setSelectedPhoto={setSelectedPhoto}/> */}
      <div className="fav-button">
        <PhotoFavButton
          isFavorited={favoritedPhotos.some(
            (photo) => photo.id === selectedPhoto.id
          )}
          
          onToggleFavorite={() => toggleFavorite(selectedPhoto.id)}
          showFav={showFav}
        />
      </div>
      <img
        src={selectedPhoto.regularImageUrl}
        className="photo-details-modal__image"
      />

      <p className="photo-details-modal__header">Similar Photos</p>
      <PhotoList
        photos={similarPhotosArray}
        favoritedPhotos={favoritedPhotos}
        onToggleFavorite={toggleFavorite}
        className="photo-details-modal__images"
      />
      {/* {similarPhotosArray.map((el) => {
        console.log(el);
        return <img src={el.urls.regular} key={el.id} className='photo-details-modal--images'/>
      })} */}
    </div>
  );
};

export default PhotoDetailsModal;
