import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import overEvery from 'lodash/fp/overEvery';
import rollout from '../util/rollout';
import { convertReqToPredicate } from '../util/requirements';
import { DO_ROLLOUT } from './types';

const doRollout = () => (dispatch, getState) => {
  const { attributeRollType, requirements } = getState();

  const checkRollout = flow(map(convertReqToPredicate), overEvery)(
    requirements,
  );

  const doRoll = () => rollout({ rollType: attributeRollType });

  let numRolls
  for (numRolls = 1; numRolls <= 1000; ++numRolls) {
    const newRollout = doRoll();
    if (checkRollout(newRollout)) {
      dispatch({
        type: DO_ROLLOUT,
        newRollout,
        numRolls,
      });
      break;
    }
  }

  if  (numRolls > 1000) {
    console.log('Took more than 1000 rolls to get rollout.');
  }
};

export default doRollout;
