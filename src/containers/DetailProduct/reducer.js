import {
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from './actionTypes';

const initialState = {
  error: null,
  loading: false,
  product: null,
};

function detailReducer(state = initialState, action) {
  if (action.type === GET_PRODUCT) {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === GET_PRODUCT_SUCCESS) {
    return {
      ...state,
      loading: false,
      product: action.payload,
    }
  }

  if (action.type === GET_PRODUCT) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    }
  }

  return state;
}

export default detailReducer;