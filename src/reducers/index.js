import { combineReducers } from 'redux';
import battle from './battle';
import playerEvents from './player-events';
import itemEvents from './item-events';
import account from './account';

const reducers = {
  account,
  battle,
  playerEvents,
  itemEvents,
};

export default combineReducers(reducers);
