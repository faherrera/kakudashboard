import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS,
} from './actionTypes'
import {
  getProductsActionFail,
  getProductsActionSuccess
} from './action';
import ProductService from '../../services/product.services';

//
function* workerSaga() {
  try {
    const productService = new ProductService();
    const response = yield call(productService.getAll); //Async Call.
    const products = response.data; //data.

    //dispatch a succes action to the store with the products populated.
    yield put(getProductsActionSuccess(products));

  } catch (error) {
    yield put(getProductsActionFail(error.message));
  }
}

// Watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeEvery(FETCH_PRODUCTS, workerSaga);
}