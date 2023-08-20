import {React, useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import FavBadge from 'components/FavBadge';


const HomeRoute = (props) => {
  const {photos, topics, setModalVisible, setSelectedPhoto} = props;
  const [favoritedPhotos, setFavouritedPhotos] = useState([]);
  const [showFav, setShowFav] = useState(false);
  
  /**
   * 
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
    <div className="home-route">
      <TopNavigationBar topics={topics} favoritedPhotos={favoritedPhotos} toggleShowFav={toggleShowFav} showFav={showFav}/>
      <PhotoList photos={showFav ? favoritedPhotos : photos} 
      onToggleFavorite={toggleFavorite} 
      favoritedPhotos={favoritedPhotos}
      setModalVisible={setModalVisible}
      setSelectedPhoto={setSelectedPhoto}/>
    
    </div>
  );
};

export default HomeRoute;

// HomeRoute
//   TopNavigationBar
//     TopicList
//     FavBadge
//   PhotosList


