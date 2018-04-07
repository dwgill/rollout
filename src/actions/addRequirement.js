import { ADD_REQUIREMENT } from './types';

const addRequirement = newReq => ({
  type: ADD_REQUIREMENT,
  newReq,
});

export default addRequirement;
