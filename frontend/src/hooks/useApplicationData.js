import { useState } from 'react';


export function useApplicationData() {
  const [state, setState] = useState({
    modalVisible: false,
    selectedPhoto: null,
    favoritedPhotos: [],
    showFav: false,
  });

  const setModalVisible = (modalVisible) => {
    setState((prevState) => ({ ...prevState, modalVisible }));
  };

  const setSelectedPhoto = (selectedPhoto) => {
    setState((prevState) => ({ ...prevState, selectedPhoto }));
  };

  const toggleFavorite = (photoId) => {
    setState((prevState) => {
      const { favoritedPhotos } = prevState;
      const isPhotoFavorited = favoritedPhotos.some((photo) => photo.id === photoId);

      if (isPhotoFavorited) {
        const updatedFavoritedPhotos = favoritedPhotos.filter((photo) => photo.id !== photoId);
        return { ...prevState, favoritedPhotos: updatedFavoritedPhotos };
      } else {
        const favoritePhoto = state.photos.find((photo) => photo.id === photoId); // Corrected line
        const updatedFavoritedPhotos = [...favoritedPhotos, favoritePhoto];
        return { ...prevState, favoritedPhotos: updatedFavoritedPhotos };
      }
    });
  };

  const toggleShowFav = () => {
    setState((prevState) => ({ ...prevState, showFav: !prevState.showFav }));
  };

  // Destructure showFav from state
  

  return {
    state,
    setModalVisible,
    setSelectedPhoto,
    toggleFavorite,
    toggleShowFav,
  };
}

