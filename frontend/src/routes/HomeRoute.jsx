import { React, useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import FavBadge from "components/FavBadge";

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    setModalVisible,
    setSelectedPhoto,
    showFav,
    favoritedPhotos,
    toggleFavorite,
    toggleShowFav,
  } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoritedPhotos={favoritedPhotos}
        toggleShowFav={toggleShowFav}
        showFav={showFav}
      />
      <PhotoList
        photos={showFav ? favoritedPhotos : photos}
        onToggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos}
        setModalVisible={setModalVisible}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;

// HomeRoute
//   TopNavigationBar
//     TopicList
//     FavBadge
//   PhotosList
