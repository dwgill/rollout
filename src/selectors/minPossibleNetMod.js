import { attributeRollType as getAttributeRollType } from '.';
import { AUGMENTED } from '../rollout-core/AttributeRollKinds';

/**
 * Determine the minimum possible total of all the attribute modifiers
 * given the currently set attribute roll type.
 */
const minPossibleNetMod = state => {
  const rollType = getAttributeRollType(state);
  if (rollType.toUpperCase() === AUGMENTED) {
    return -1 * 6;
  } else {
    return -4 * 6;
  }
};

export default minPossibleNetMod;
