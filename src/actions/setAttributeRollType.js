import { SET_ATTRIBUTE_ROLL_TYPE } from './types';

/**
 * @typedef SET_ATTRIBUTE_ROLL_TYPE
 * @prop {string} type
 * @prop {string} payload
 */

/**
 *
 * @param {string} newRollType
 * @returns {SET_ATTRIBUTE_ROLL_TYPE} the action
 */
const setAttributeRollType = newRollType => ({
  type: SET_ATTRIBUTE_ROLL_TYPE,
  payload: newRollType,
});

export default setAttributeRollType;
