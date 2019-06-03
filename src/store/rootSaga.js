import { all, fork } from 'redux-saga/effects';

import { watcherSaga } from './../containers/ProductCardList/sagas';
import getProductByIdWatcher from './../containers/DetailProduct/sagas';

export default function* rootSaga() {
  yield all([
    fork(watcherSaga),
    fork(getProductByIdWatcher),
  ]);
}
