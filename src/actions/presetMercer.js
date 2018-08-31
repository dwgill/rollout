import { STANDARD } from '../rollout-core/AttributeRollKinds';
import { AT_LEAST, NetScoreConstraint } from '../rollout-core/ConstraintKinds';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { PRESET_MERCER } from './types';

const presetMercer = () => dispatch => {
  dispatch({ type: PRESET_MERCER });
  dispatch(setRollInOrder(false));
  dispatch(setAttributeRollType(STANDARD));
  dispatch(replaceRequirements([NetScoreConstraint(AT_LEAST, 70)]));
};

export default presetMercer;
