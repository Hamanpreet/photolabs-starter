import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({setModalVisible, selectedPhoto}) => {
  const closeModal = () => {
    setModalVisible(false);
  }
  console.log(selectedPhoto);
  
    const similarPhotosArray = Object.values(selectedPhoto.similarPhotos);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
        <PhotoFavButton />
        <div className="photo-details-modal__image-container">
        <img src={selectedPhoto.regularImageUrl} className='photo-details-modal__image' />
      </div>
      <p className='photo-details-modal__header'>Similar Photos</p>
      <PhotoList photos={similarPhotosArray}
      favoritedPhotos={[]} className="photo-details-modal__images"/>
      {/* {similarPhotosArray.map((el) => {
        console.log(el);
        return <img src={el.urls.regular} key={el.id} className='photo-details-modal--images'/>
      })} */}
    </div>
  )
};

export default PhotoDetailsModal;
