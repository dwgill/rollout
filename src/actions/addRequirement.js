import { ADD_REQUIREMENT } from './types';

const addRequirement = newReq => ({
  type: ADD_REQUIREMENT,
  payload: newReq,
});

export default addRequirement;
