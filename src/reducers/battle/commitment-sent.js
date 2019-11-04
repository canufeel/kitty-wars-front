import * as types from '../../actions/types';
import { addItemsReducerFactory } from '../../utils/reducer-factories';

const commitmentSentEventsReducer = addItemsReducerFactory({
  initialState: {},
  addItemsActionType: types.ADD_BATTLE_COMMITMENT_SENT_EVENTS,
  idPropNameGenerator: item => item.battleId,
});

export default commitmentSentEventsReducer;