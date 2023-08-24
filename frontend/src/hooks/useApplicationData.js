import { useReducer } from 'react';
import photos from '../mocks/photos';

export const ACTIONS = {
  TOGGLE_FAV: 'TOGGLE_FAV',
  SET_MODAL_VISIBLE: 'SET_MODAL_VISIBLE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_SHOW_FAV: 'TOGGLE_SHOW_FAV',
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV:
      const checkFav = state.favoritedPhotos.filter((el) => el.id === action.value);
      if (checkFav.length > 0) {
        const filtered = state.favoritedPhotos.filter(el => el.id !== action.value);
        console.log("filtered", filtered);
        return { ...state, favoritedPhotos: filtered };
      } else {
        const favoritedPhotos = state.photos.filter((el) => el.id === action.value);
        console.log("favphots",favoritedPhotos);
        return { ...state, favoritedPhotos };
      }
    case ACTIONS.TOGGLE_SHOW_FAV:
      return { ...state, showFav: !state.showFav };
    case ACTIONS.SET_MODAL_VISIBLE:
      return { ...state, modalVisible: !state.modalVisible };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.value };

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
    photos,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV, value: photoId });
  }

  const toggleShowFav = (x) => {
    dispatch({ type: ACTIONS.TOGGLE_SHOW_FAV, value: x});
  }

  const setModalVisible = (x) => {
    console.log("should be visible", state.modalVisible);
    dispatch({ type: ACTIONS.SET_MODAL_VISIBLE, value: x})
  }

  const setSelectedPhoto = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, value: data });
  }


  return {
    state,
    setModalVisible,
    setSelectedPhoto,
    toggleFavorite,
    toggleShowFav,
  };
}

