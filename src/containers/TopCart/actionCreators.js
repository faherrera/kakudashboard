import {
  TOGGLE_TOP_CART,
  ADD_PRODUCT_TO_CART,
} from './actionTypes';

function toggleTopCartAction() {
  return {
    type: TOGGLE_TOP_CART,
  }
}

function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: { product }
  }
};

export {
  toggleTopCartAction,
  addProductToCart
};