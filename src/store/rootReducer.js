import { combineReducers } from 'redux';
import productReducer from '../containers/ProductCardList/reducer';
import detailReducer from '../containers/DetailProduct/reducer';

const rootReducer = combineReducers({
  productReducer,
  detailReducer,
});

export default rootReducer;
