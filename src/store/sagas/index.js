import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionsTypes';
import { logoutSaga, checkAuthTimeoutSaga } from './auth';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INIT_LOGOUT, logoutSaga)
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
}