import {call, put} from 'redux-saga/effects';

import api from '../../../services/api';
import {addSuccess, addFailure} from './actions';

export function* add(action: any) {
  try {
    const {data} = yield call(
      api.get,
      `repos/${action.payload.data.user}/${action.payload.data.repositoryName}`,
    );

    yield put(addSuccess(data));
  } catch (error) {
    yield put(addFailure());
  }
}
