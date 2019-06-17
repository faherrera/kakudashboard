import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';

import { GET_PRODUCT } from './actionTypes';
import ProductService from '../../services/product.services';
import {
  getProductByIdSuccess,
  getProductByIdFail,
} from './actionCreators';

function* getProductByIdWorker({ payload }) {
  const { id } = payload;
  try {
    const productService = new ProductService();
    const response = yield call(productService.getProductById, id);
    const product = response.data;
    yield put(getProductByIdSuccess(product));

  } catch (error) {
    yield put(getProductByIdFail(error.message));
  }
}

function* getProductByIdWatcher() {
  yield takeLatest(GET_PRODUCT, getProductByIdWorker);
}

export default getProductByIdWatcher;