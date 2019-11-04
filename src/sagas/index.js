import * as types from 'actions/types';
import { appBoot } from './app';
import { takeEvery } from '@redux-saga/core/effects';

export default function* rootSaga() {
  yield takeEvery(types.APP_BOOT, appBoot);
}