import { attributeRollType as getAttributeRollType } from '.';
import { AUGMENTED } from '../util/attributeRolls';

/**
 * Determine the minimum possible total of all the scores given
 * the currently set attribute roll type.
 */
const minPossibleTotalScore = state => {
  const rollType = getAttributeRollType(state);
  if (rollType.toUpperCase() === AUGMENTED) {
    return -1 * 6;
  } else {
    return -4 * 6;
  }
};

export default minPossibleTotalScore;
