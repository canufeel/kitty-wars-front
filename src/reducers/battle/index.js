import { combineReducers } from 'redux';
import commitmentResolved from './commitment-resolved';
import commitmentSent from './commitment-sent';
import created from './created';
import joined from './joined';
import won from './won';

export default combineReducers({
  commitmentResolved,
  commitmentSent,
  created,
  joined,
  won,
});
