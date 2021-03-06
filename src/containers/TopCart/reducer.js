import {
  TOGGLE_TOP_CART,
  ADD_PRODUCT_TO_CART,
} from './actionTypes';

const initialState = {
  cart: [],
  openMenu: false,
}

function cartReducer(state = initialState, { type, payload }) {
  if (type === TOGGLE_TOP_CART) {
    return {
      ...state,
      openMenu: !state.openMenu
    }
  }
  if (type === ADD_PRODUCT_TO_CART) {
    const { product } = payload;
    const findProduct = state.cart.find(productCart => productCart.id === product.id);
    const newCart = state.cart.filter(productCart => productCart.id !== product.id);

    if (findProduct) {
      if (findProduct.hasOwnProperty('quantity')) {
        findProduct.quantity += 1;
      } else {
        findProduct.quantity = 1;
      }
      return {
        ...state,
        cart: [...newCart, findProduct],
      }
    }

    product.quantity = 1;
    return {
      ...state,
      cart: [...newCart, product],
    }

  }
  return state;
}

export default cartReducer;