import { REPLACE_REQUIREMENTS } from './types';

const replaceRequirements = newReqs => ({
  type: REPLACE_REQUIREMENTS,
  payload: newReqs,
});

export default replaceRequirements;
