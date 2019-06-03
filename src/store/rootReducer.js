import { combineReducers } from 'redux';
import productReducer from '../containers/ProductCardList/reducer';
import detailReducer from '../containers/DetailProduct/reducer';
import cartReducer from '../containers/TopCart/reducer';

const rootReducer = combineReducers({
  productReducer,
  detailReducer,
  cartReducer
});

export default rootReducer;
