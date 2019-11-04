import * as types from './types';
import { emptyActionCreator, payloadActionCreator } from '../utils/action-creators';

export const gameJoin = emptyActionCreator(
  types.GAME_JOIN
);

export const gameLoot = emptyActionCreator(
  types.GAME_LOOT
);

export const createBattle = emptyActionCreator(
  types.CREATE_BATTLE
);

export const joinBattle = payloadActionCreator(
  types.JOIN_BATTLE
);

export const submitBattleCommitment = payloadActionCreator(
  types.SUBMIT_BATTLE_COMMITMENT
);

export const submitBattleCommitmentResolution = payloadActionCreator(
  types.SUBMIT_BATTLE_COMMITMENT_RESOLUTION
);
