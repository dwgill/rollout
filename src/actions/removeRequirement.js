import { REMOVE_REQUIREMENT } from './types';

/**
 * @param {number} reqId
 */
const removeRequirement = reqId => ({
  type: REMOVE_REQUIREMENT,
  payload: reqId,
});

export default removeRequirement;
