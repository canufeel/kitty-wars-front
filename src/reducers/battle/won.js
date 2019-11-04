import * as types from '../../actions/types';
import { addItemsReducerFactory } from '../../utils/reducer-factories';

const wonEventsReducer = addItemsReducerFactory({
  initialState: {},
  addItemsActionType: types.ADD_BATTLE_WON_EVENTS,
  idPropNameGenerator: item => item.battleId,
});

export default wonEventsReducer;