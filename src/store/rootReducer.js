import { combineReducers } from 'redux';
import productReducer from '../containers/ProductCardList/reducer';

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;
