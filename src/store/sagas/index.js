import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionsTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INIT_LOGOUT, logoutSaga)
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga)
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
}