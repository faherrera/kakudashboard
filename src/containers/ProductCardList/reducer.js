import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from './actionTypes';

const initialState = {
  products: [],
  loading: false,
  error: null,
}

function productReducer(state = initialState, { type, payload }) {
  if (type === FETCH_PRODUCTS) {
    return {
      ...state,
      products: [],
      loading: true,
    };
  }

  if (type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: payload,
      loading: false,
    }
  }

  if (type === FETCH_PRODUCTS_FAIL) {
    return {
      ...state,
      error: payload,
      loading: false,
    }
  }

  return state;
}

export default productReducer;