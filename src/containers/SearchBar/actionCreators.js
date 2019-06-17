import {
  SEARCH_TEXT
} from './actionTypes';

function searchBarAction(text) {
  return {
    type: SEARCH_TEXT,
    payload: { text },
  }
};

export {
  searchBarAction
};