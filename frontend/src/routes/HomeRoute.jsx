import { React, useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

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
    photoTopic,
    selectedTopicId,
    photoTopicData
  } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoritedPhotos={favoritedPhotos}
        toggleShowFav={toggleShowFav}
        showFav={showFav}
        photoTopic={photoTopic}
        selectedTopicId={selectedTopicId}
        photoTopicData={photoTopicData}
  
      />
      <PhotoList
        photos={showFav ? favoritedPhotos : photos}
        onToggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos}
        setModalVisible={setModalVisible}
        setSelectedPhoto={setSelectedPhoto}
        photoTopicData={photoTopicData}
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
