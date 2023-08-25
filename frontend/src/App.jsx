import { React, useReducer } from "react";
import "./App.scss";
import "./styles/PhotoList.scss";
import photos from "../src/mocks/photos";
import topics from "../src/mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { reducer, useApplicationData } from "hooks/useApplicationData";

// deconstruct to use various functions
export function Application(props) {
  const {
    state,
    setModalVisible,
    setSelectedPhoto,
    toggleFavorite,
    toggleShowFav,
    setTopicData,
  } = useApplicationData();

  const { modalVisible, selectedPhoto, favoritedPhotos, showFav, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setModalVisible={setModalVisible}
        setSelectedPhoto={setSelectedPhoto}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        toggleShowFav={toggleShowFav}
        showFav={showFav}
        setTopicData = {setTopicData}
        topicData = {topicData}
      />

      {modalVisible && (
        <PhotoDetailsModal
          setModalVisible={setModalVisible}
          photos={photos}
          selectedPhoto={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
          showFav={showFav}
        />
      )}
    </div>
  );
}

export default Application;
