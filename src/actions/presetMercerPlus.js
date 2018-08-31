import { STANDARD } from '../rollout-core/AttributeRollKinds';
import { AT_LEAST, NetScoreConstraint } from '../rollout-core/ConstraintKinds';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { PRESET_MERCER_PLUS } from './types';

const presetMercerPlus = () => dispatch => {
  dispatch({ type: PRESET_MERCER_PLUS });
  dispatch(setRollInOrder(false));
  dispatch(setAttributeRollType(STANDARD));
  dispatch(replaceRequirements([NetScoreConstraint(AT_LEAST, 75)]));
};

export default presetMercerPlus;
