import { call, put } from '@redux-saga/core/effects';
import {
  getAllContractsAndAccount,
  getItemEvents,
  getPlayers
} from '../contracts/compiled';
import { addActions } from 'actions';

export function* appBoot() {
  const {
    contracts,
    account
  } = yield call(getAllContractsAndAccount);
  yield put(addActions.addContracts(contracts));
  yield put(addActions.addAccountCredentials(account));
  const itemEvents = yield call(getItemEvents);
  yield put(addActions.addItemEvents(itemEvents));
  const players = yield call(getPlayers);
  yield put(addActions.addPlayerEvents(players));
}