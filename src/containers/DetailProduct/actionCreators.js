import {
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from './actionTypes';

const getProductById = (id) => (
  {
    type: GET_PRODUCT,
    payload: { id },
  }
);

const getProductByIdSuccess = (product) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: product,
});

const getProductByIdFail = (error) => ({
  type: GET_PRODUCT_FAIL,
  payload: error,
});

export {
  getProductById,
  getProductByIdFail,
  getProductByIdSuccess,
}