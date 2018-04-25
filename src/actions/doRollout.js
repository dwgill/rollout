import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import overEvery from 'lodash/fp/overEvery';
import rollout from '../util/rollout';
import { convertReqToPredicate } from '../util/requirements';
import { DO_ROLLOUT, FAIL_ROLLOUT } from './types';

const doRollout = () => (dispatch, getState) => {
  const { attributeRollType, requirements } = getState();

  const checkRollout = flow(map(convertReqToPredicate), overEvery)(
    requirements,
  );

  const doRoll = () => rollout({ rollType: attributeRollType });

  let numRolls;
  for (numRolls = 1; numRolls <= 500; ++numRolls) {
    const newRollout = doRoll();
    if (checkRollout(newRollout)) {
      dispatch({
        type: DO_ROLLOUT,
        payload: {
          newRollout,
          numRolls,
        },
      });
      break;
    }
  }

  if (numRolls > 500) {
    dispatch({
      type: FAIL_ROLLOUT,
      payload: numRolls - 1,
    });
  }
};

export default doRollout;
