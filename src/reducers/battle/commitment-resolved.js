import * as types from '../../actions/types';
import { addItemsReducerFactory } from '../../utils/reducer-factories';

const commitmentResolvedEventsReducer = addItemsReducerFactory({
  initialState: {},
  addItemsActionType: types.ADD_BATTLE_COMMITMENT_RESOLVED_EVENTS,
  idPropNameGenerator: item => item.battleId,
});

export default commitmentResolvedEventsReducer;