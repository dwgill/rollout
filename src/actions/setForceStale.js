import { createAction } from '@reduxjs/toolkit';
import { SET_FORCE_STALE } from './types';

/**
 * Creates an action indicating whether rollouts can only be initated
 * if the rollout is stale.
 */
const setForceStale = createAction(SET_FORCE_STALE, (shouldRequireStale) => ({
  payload: !!shouldRequireStale,
}));

export default setForceStale;
