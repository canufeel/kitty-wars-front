import * as types from '../actions/types';
import { addItemsReducerFactory } from '../utils/reducer-factories';

const playerEventsReducer = addItemsReducerFactory({
  initialState: {},
  addItemsActionType: types.ADD_ITEM_EVENTS,
  idPropNameGenerator: item => item.itemId,
});

export default playerEventsReducer;