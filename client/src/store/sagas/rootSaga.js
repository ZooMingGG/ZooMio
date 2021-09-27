import { fork, all } from 'redux-saga/effects';
import { watchSignUp } from './userSaga';

export default function* rootSaga() {
  yield all([
    fork(watchSignUp),
  ]);
}
