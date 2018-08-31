import { PRESET_COLVILLE_CLASSIC } from './types';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { ScoreConstraint, AT_LEAST } from '../rollout-core/ConstraintKinds';
import { STANDARD } from '../rollout-core/AttributeRollKinds';

const presetColvilleClassic = () => dispatch => {
  dispatch({ type: PRESET_COLVILLE_CLASSIC });
  dispatch(setRollInOrder(true));
  dispatch(setAttributeRollType(STANDARD));
  dispatch(replaceRequirements([ScoreConstraint(AT_LEAST, 2, AT_LEAST, 15)]));
};

export default presetColvilleClassic;
