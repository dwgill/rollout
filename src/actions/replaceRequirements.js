import { REPLACE_REQUIREMENTS } from './types';

const replaceRequirements = reqs => ({
  type: REPLACE_REQUIREMENTS,
  newReqs: reqs,
});

export default replaceRequirements;
