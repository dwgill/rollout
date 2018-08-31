import doRolloutCore from '../rollout-core/doRollout';
import { DO_ROLLOUT, FAIL_ROLLOUT } from './types';

const doRollout = () => (dispatch, getState) => {
  const { attributeRollType, requirements } = getState();

  const { numRolls, rollout } = doRolloutCore({
    constraints: requirements,
    attributeRoll: attributeRollType,
    tolerance: 500,
  });

  if (!rollout) {
    dispatch({
      type: FAIL_ROLLOUT,
      payload: numRolls,
    });
  } else {
    dispatch({
      type: DO_ROLLOUT,
      payload: {
        numRolls,
        newRollout: rollout,
      },
    });
  }
};

export default doRollout;
