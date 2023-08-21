import {React, useState} from 'react';
import './App.scss';
import './styles/PhotoList.scss'
import photos from '../src/mocks/photos';
import topics from '../src/mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  //keep passing setModalVisible till photoListItem and toggle there
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [favoritedPhotos, setFavouritedPhotos] = useState([]); // Lifted state
  const [showFav, setShowFav] = useState(false);

  /**
   * @param {*} photoId 
   * If the photoId exists in the favorite photos, we remove it
   * If it doesn't exist, we filter the photo out,
   * Add it in favoritedPhtos 
   */
  const toggleFavorite = (photoId) => {
    const checkFav = favoritedPhotos.filter((el) => el.id === photoId);
    if (checkFav.length > 0) {
      const filtered = favoritedPhotos.filter(el => el.id !==photoId);
      setFavouritedPhotos(filtered);
    } else {
      const favoritePhoto = photos.filter((el) => el.id === photoId)
      setFavouritedPhotos((prev) => ([...prev, ...favoritePhoto]));
    }
  };

  const toggleShowFav =() => {
    setShowFav((prev) => !prev);
  }
  return (
    <div className="App">
       <HomeRoute photos={photos} topics={topics} setModalVisible={setModalVisible}
        setSelectedPhoto={setSelectedPhoto}
        favoritedPhotos={favoritedPhotos} // Pass favoritedPhotos as prop
        toggleFavorite={toggleFavorite} // Pass toggleFavorite as prop
        toggleShowFav={toggleShowFav}
        showFav= {showFav}/>
       {modalVisible && <PhotoDetailsModal setModalVisible={setModalVisible} 
       photos={photos} selectedPhoto={selectedPhoto}
       favoritedPhotos={favoritedPhotos} // Pass favoritedPhotos as prop
        toggleFavorite={toggleFavorite} 
        showFav={showFav}/>}
    </div>
  );
};

export default App;
