import { REMOVE_REQUIREMENT } from './types';

/**
 * @param {number} reqId
 */
const removeRequirement = reqId => ({
  type: REMOVE_REQUIREMENT,
  reqId,
});

export default removeRequirement;
