import * as types from './types';
import { payloadActionCreator } from '../utils/action-creators';

export const addBattleWonEvents = payloadActionCreator(
  types.ADD_BATTLE_WON_EVENTS,
);

export const addBattleCreatedEvents = payloadActionCreator(
  types.ADD_BATTLE_CREATED_EVENTS
);

export const addBattleJoinedEvents = payloadActionCreator(
  types.ADD_BATTLE_JOINED_EVENTS
);

export const addBattleCommitmentSentEvents = payloadActionCreator(
  types.ADD_BATTLE_COMMITMENT_SENT_EVENTS
);

export const addBattleCommitmentResolvedEvents = payloadActionCreator(
  types.ADD_BATTLE_COMMITMENT_RESOLVED_EVENTS
);

export const addItemEvents = payloadActionCreator(
  types.ADD_ITEM_EVENTS
);

export const addContractEvents = payloadActionCreator(
  types.ADD_CONTRACTS
);

export const addPlayerEvents = payloadActionCreator(
  types.ADD_PLAYER_EVENTS
);

export const addAccountCredentials = payloadActionCreator(
  types.ADD_ACCOUNT_CREDENTIALS
);
