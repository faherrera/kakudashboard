import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS,
} from './actionTypes';

const getProductsAction = () => (
  {
    type: FETCH_PRODUCTS
  }
);

function getProductsActionFail(error) {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: error,
  };
}

const getProductsActionSuccess = (products) => (
  {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  }
);

export {
  getProductsAction,
  getProductsActionFail,
  getProductsActionSuccess,
}