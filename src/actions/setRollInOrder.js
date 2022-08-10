import { createAction } from '@reduxjs/toolkit';
import { SET_ROLL_IN_ORDER } from './types';

const setRollInOrder = createAction(SET_ROLL_IN_ORDER, (shouldRollInOrder) => ({
  payload: !!shouldRollInOrder,
}));

export default setRollInOrder;
