import { SET_ROLL_IN_ORDER } from './types';

/**
 * @typedef SET_ROLL_IN_ORDER
 * @prop {string} type
 * @prop {boolean} payload
 */

/**
 * 
 * @param {string} shouldRollInOrder 
 * @returns {SET_ROLL_IN_ORDER} the action
 */
const setRollInOrder = (shouldRollInOrder) => ({
    type: SET_ROLL_IN_ORDER,
    payload: shouldRollInOrder,
});

export default setRollInOrder;