import { PRESET_COLVILLE_CLASSIC } from './types';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { scoreReq } from '../util/requirements';

const presetColvilleClassic = () => dispatch => {
  dispatch({ type: PRESET_COLVILLE_CLASSIC });
  dispatch(setRollInOrder(true));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([scoreReq('AT_LEAST', 2, 'AT_LEAST', 15)]));
};

export default presetColvilleClassic;
