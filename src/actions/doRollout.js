import rollout from '../util/rollout';
import { DO_ROLLOUT } from './types';

const doRollout = () => (dispatch, getState) => {
  const { attributeRollType } = getState();

  const newRollout = rollout({
    rollType: attributeRollType,
  });

  dispatch({
    type: DO_ROLLOUT,
    newRollout,
    numRolls: 1,
  });
};

export default doRollout;
