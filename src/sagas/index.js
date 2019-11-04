import * as types from 'actions/types';
import { appBoot } from './app';
import { fork } from '@redux-saga/core/effects';

export default function* rootSaga() {
  yield fork(appBoot);
}