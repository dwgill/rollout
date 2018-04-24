import { PRESET_MERCER } from './types';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { netScoreReq } from '../util/requirements';

const presetMercer = () => dispatch => {
  dispatch({ type: PRESET_MERCER });
  dispatch(setRollInOrder(false));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([netScoreReq('AT_LEAST', 70)]));
};

export default presetMercer;
