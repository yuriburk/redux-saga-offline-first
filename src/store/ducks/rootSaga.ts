import {all, takeLatest} from 'redux-saga/effects';

import {RepositoriesTypes} from './repositories/types';
import {add} from './repositories/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(RepositoriesTypes.ADD_REQUEST, add)]);
}
