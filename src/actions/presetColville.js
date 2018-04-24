import { PRESET_COLVILLE } from './types';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { scoreReq } from '../util/requirements';

const presetColville = () => dispatch => {
  dispatch({ type: PRESET_COLVILLE });
  dispatch(setRollInOrder(true));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([scoreReq('AT_LEAST', 2, 'AT_LEAST', 15)]));
};

export default presetColville;
