import { attributeRollType as getAttributeRollType } from '.';
import { AUGMENTED } from '../util/attributeRolls';

/**
 * Determine the minimum possible total of all the attribute modifiers
 * given the currently set attribute roll type.
 */
const minPossibleNetMod = state => {
  const rollType = getAttributeRollType(state);
  if (rollType.toUpperCase() === AUGMENTED) {
    return 8 * 6;
  } else {
    return 3 * 6;
  }
};

export default minPossibleNetMod;
