import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  TOGGLE_FAV: "TOGGLE_FAV",
  SET_MODAL_VISIBLE: "SET_MODAL_VISIBLE",
  SELECT_PHOTO: "SELECT_PHOTO",
  TOGGLE_SHOW_FAV: "TOGGLE_SHOW_FAV",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV:
      //check if it exists in favoritedphotos,
      //remove it or add it accordingly
      const photoIndex = state.favoritedPhotos.findIndex(
        (el) => el.id === action.value
      );
      if (photoIndex === -1) {
        const favoritedPhoto = state.photoData.find(
          (el) => el.id === action.value
        );
        return {
          ...state,
          favoritedPhotos: [...state.favoritedPhotos, favoritedPhoto],
        };
      } else {
        const updatedFavoritedPhotos = state.favoritedPhotos.filter(
          (el) => el.id !== action.value
        );
        return { ...state, favoritedPhotos: updatedFavoritedPhotos };
      }
    case ACTIONS.TOGGLE_SHOW_FAV:
      return { ...state, showFav: !state.showFav };
    case ACTIONS.SET_MODAL_VISIBLE:
      return { ...state, modalVisible: !state.modalVisible };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.value };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.value };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.value };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, selectedTopicId: action.value };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export function useApplicationData() {
  const initialState = {
    modalVisible: false,
    selectedPhoto: null,
    favoritedPhotos: [],
    showFav: false,
    topicData: [],
    photoData: [],
    photoTopic: [],
    selectedTopicId: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //use promiseAll, we want either both photos and topics or none
  useEffect(() => {
    const photoPromise = axios.get("/api/photos");
    const topicPromise = axios.get("/api/topics");

    const promises = [photoPromise, topicPromise];

    Promise.all(promises).then((arrResponse) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: arrResponse[0].data });
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, value: arrResponse[1].data });
    });
  }, []);

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV, value: photoId });
  };

  const toggleShowFav = (data) => {
    dispatch({ type: ACTIONS.TOGGLE_SHOW_FAV, value: data });
  };

  const setModalVisible = (data) => {
    dispatch({ type: ACTIONS.SET_MODAL_VISIBLE, value: data });
  };

  const setSelectedPhoto = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, value: data });
  };

  const photoTopicData = (selectedTopicId) => {
    if (selectedTopicId !== null) {
      axios
        .get(`/api/topics/photos/${selectedTopicId}`)
        .then((res) => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: res.data });
        })
        .catch((error) => {
          console.error("Error fetching photos by topic:", error);
        });
    }
  };

  return {
    state,
    setModalVisible,
    setSelectedPhoto,
    toggleFavorite,
    toggleShowFav,
    photoTopicData,
  };
}
