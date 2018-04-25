import { PRESET_COLVILLE } from './types';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { netModReq } from '../util/requirements';

const presetColville = () => dispatch => {
  dispatch({ type: PRESET_COLVILLE });
  dispatch(setRollInOrder(true));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([netModReq('AT_LEAST', 2)]));
};

export default presetColville;
