import {
  TOGGLE_TOP_CART,
  ADD_PRODUCT_TO_CART,
} from './actionTypes';

const initialState = {
  cart: [],
  openMenu: true,
}

function cartReducer(state = initialState, { type, payload }) {
  if (type === TOGGLE_TOP_CART) {
    return {
      ...state,
      openMenu: !state.openMenu
    }
  }
  if (type === ADD_PRODUCT_TO_CART) {
    return {
      ...state,
      cart: [...state.cart, payload.product]
    }
  }
  return state;
}

export default cartReducer;