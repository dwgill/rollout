import { SET_DISPLAY_DICE } from './types';

/**
 * @typedef SET_DISPLAY_DICE
 * @prop {string} type
 * @prop {boolean} payload
 */

/**
 *
 * @param {string} shouldDisplayDice
 * @returns {SET_DISPLAY_DICE} the action
 */
const setDisplayDice = shouldDisplayDice => ({
  type: SET_DISPLAY_DICE,
  payload: shouldDisplayDice,
});

export default setDisplayDice;
