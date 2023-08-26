import { useReducer, useEffect } from 'react';
import axios from 'axios';


export const ACTIONS = {
  TOGGLE_FAV: 'TOGGLE_FAV',
  SET_MODAL_VISIBLE: 'SET_MODAL_VISIBLE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_SHOW_FAV: 'TOGGLE_SHOW_FAV',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  
}



export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV:
      const checkFav = state.favoritedPhotos.filter((el) => el.id === action.value);
      if (checkFav.length > 0) {
        const filtered = state.favoritedPhotos.filter(el => el.id !== action.value);
       
        return { ...state, favoritedPhotos: filtered };
      } else {
        const favoritedPhotos = state.photoData.filter((el) => el.id === action.value);
        
        return { ...state, favoritedPhotos };
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
    topicData:[],
    photoData: [],
    photoTopic: [],
    selectedTopicId:null

  };

  const [state, dispatch] = useReducer(reducer, initialState);
 
  // useEffect(() => {
    
  // }, [state.selectedTopicId]);


  useEffect(() => {
    const photoPromise = axios.get('http://localhost:8001/api/photos');
    const topicPromise = axios.get('http://localhost:8001/api/topics');
    
    const promises = [photoPromise, topicPromise];

    Promise.all(promises)
    .then((arrResponse) => {
      console.log(arrResponse[1].data)
      dispatch({type: ACTIONS.SET_PHOTO_DATA, value: arrResponse[0].data});
      dispatch({type: ACTIONS.SET_TOPIC_DATA, value: arrResponse[1].data});
      
    });
  }, []);


  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV, value: photoId });
  }

  const toggleShowFav = (x) => {
    dispatch({ type: ACTIONS.TOGGLE_SHOW_FAV, value: x});
  }

  const setModalVisible = (x) => {
    dispatch({ type: ACTIONS.SET_MODAL_VISIBLE, value: x})
  }

  const setSelectedPhoto = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, value: data });
  }

  const photoTopicData = (selectedTopicId) => {
    if (selectedTopicId !== null) {
      axios.get(`http://localhost:8001/api/topics/photos/${selectedTopicId}`)
        .then((res) => {
          console.log("here",res.data);
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: res.data });
        })
        .catch((error) => {
          console.error("Error fetching photos by topic:", error);
        });
    }
  }


  return {
    state,
    setModalVisible,
    setSelectedPhoto,
    toggleFavorite,
    toggleShowFav,
    photoTopicData

  };
}

