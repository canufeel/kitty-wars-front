import * as types from '../actions/types';
import { addItemsReducerFactory } from '../utils/reducer-factories';

const playerEventsReducer = addItemsReducerFactory({
  initialState: {},
  addItemsActionType: types.ADD_PLAYER_EVENTS,
  idPropNameGenerator: item => item.playerAddress,
});

export default playerEventsReducer;