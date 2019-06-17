import { combineReducers } from 'redux';
import productReducer from '../containers/ProductCardList/reducer';
import detailReducer from '../containers/DetailProduct/reducer';
import cartReducer from '../containers/TopCart/reducer';
import searchBarReducer from '../containers/SearchBar/reducer';

const rootReducer = combineReducers({
  cartReducer,
  detailReducer,
  productReducer,
  searchBarReducer,
});

export default rootReducer;
