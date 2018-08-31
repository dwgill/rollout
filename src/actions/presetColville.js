import { PRESET_COLVILLE } from './types';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { NetModConstraint, AT_LEAST } from '../rollout-core/ConstraintKinds';
import { STANDARD } from '../rollout-core/AttributeRollKinds';

const presetColville = () => dispatch => {
  dispatch({ type: PRESET_COLVILLE });
  dispatch(setRollInOrder(true));
  dispatch(setAttributeRollType(STANDARD));
  dispatch(replaceRequirements([NetModConstraint(AT_LEAST, 2)]));
};

export default presetColville;
