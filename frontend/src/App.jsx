import { React } from "react";
import "./App.scss";
import "./styles/PhotoList.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";


export function Application() {
  const {
    state,
    setModalVisible,
    setSelectedPhoto,
    toggleFavorite,
    toggleShowFav,
    photoTopicData,
  } = useApplicationData();

  const {
    modalVisible,
    selectedPhoto,
    favoritedPhotos,
    showFav,
    topicData,
    photoData,
    photoTopic,
    selectedTopicId,
  } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        photoTopic={photoTopic}
        setModalVisible={setModalVisible}
        setSelectedPhoto={setSelectedPhoto}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        toggleShowFav={toggleShowFav}
        showFav={showFav}
        selectedTopicId={selectedTopicId}
        photoTopicData={photoTopicData}
      />

      {modalVisible && (
        <PhotoDetailsModal
          setModalVisible={setModalVisible}
          photos={photoData}
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
