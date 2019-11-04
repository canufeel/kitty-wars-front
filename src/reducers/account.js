import * as types from '../actions/types';

const accountReducer = (state = null, action) => {
  switch (action.type) {
    case types.ADD_ACCOUNT_CREDENTIALS:
      return action.data;
    default:
      return state;
  }
};

export default accountReducer;
