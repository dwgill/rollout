import { PRESET_MERCER_PLUS } from './types';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import { netScoreReq } from '../util/requirements';

const presetMercerPlus = () => dispatch => {
  dispatch({ type: PRESET_MERCER_PLUS });
  dispatch(setRollInOrder(false));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([netScoreReq('AT_LEAST', 75)]));
};

export default presetMercerPlus;
