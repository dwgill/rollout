import { SET_FORCE_STALE } from './types';

/**
 * @typedef SET_FORCE_STALE
 * @prop {string} type
 * @prop {boolean} payload
 */

/**
 * Creates an action indicating whether rollouts can only be initated if the rollout is stale.
 * @param {boolean} shouldForceStale
 * @returns {SET_DISPLAY_DICE} the action
 */
const setForceStale = shouldRequireStale => ({
  type: SET_FORCE_STALE,
  payload: shouldRequireStale,
});

export default setForceStale;
