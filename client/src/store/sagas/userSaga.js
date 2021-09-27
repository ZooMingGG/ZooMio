import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { SIGN_UP } from '../actionTypes';

const fetch = userData => {
  return axios.post('https://localhost:8080/api/auth/register', userData);
};

export function* signUp(action) {
  const data = yield fetch(action.payload);
  yield put({ type: 'SET_DATA', payload: data });
}

export function* watchSignUp() {
  yield takeEvery(SIGN_UP, signUp);
}
