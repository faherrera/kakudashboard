import { SEARCH_TEXT } from './actionTypes';

const initialState = {
  searchText: "",
}

function searchBarReducer(state = initialState, { type, payload }) {
  if (type == SEARCH_TEXT) {
    return {
      ...state,
      searchText: payload.text,
    }
  }
  return state;
}

export default searchBarReducer;