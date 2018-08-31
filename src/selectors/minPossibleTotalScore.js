import { attributeRollType as getAttributeRollType } from '.';
import { AUGMENTED } from '../rollout-core/AttributeRollKinds';

/**
 * Determine the minimum possible total of all the scores given
 * the currently set attribute roll type.
 */
const minPossibleTotalScore = state => {
  const rollType = getAttributeRollType(state);
  if (rollType.toUpperCase() === AUGMENTED) {
    return 8 * 6;
  } else {
    return 3 * 6;
  }
};

export default minPossibleTotalScore;
