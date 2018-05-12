import { attributeRollType as getAttributeRollType } from '.';
import { AUGMENTED } from '../util/attributeRolls';

/**
 * Determine the minimum possible individual score given
 * the currently set attribute roll type.
 */
const minPossibleIndividualScore = state => {
  const rollType = getAttributeRollType(state);
  if (rollType.toUpperCase() === AUGMENTED) {
    return 8;
  } else {
    return 3;
  }
};

export default minPossibleIndividualScore;
