import * as types from '../../actions/types';
import { addItemsReducerFactory } from '../../utils/reducer-factories';

const createdEventsReducer = addItemsReducerFactory({
  initialState: {},
  addItemsActionType: types.ADD_BATTLE_CREATED_EVENTS,
  idPropNameGenerator: item => item.battleId,
});

export default createdEventsReducer;