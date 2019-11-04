import * as types from '../../actions/types';
import { addItemsReducerFactory } from '../../utils/reducer-factories';

const joinedEventsReducer = addItemsReducerFactory({
  initialState: {},
  addItemsActionType: types.ADD_BATTLE_JOINED_EVENTS,
  idPropNameGenerator: item => item.battleId,
});

export default joinedEventsReducer;