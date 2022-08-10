import { createAction } from '@reduxjs/toolkit';
import { SET_DISPLAY_DICE } from './types';

const setDisplayDice = createAction(
  SET_DISPLAY_DICE,
  (shouldDisplayDice) => ({ payload: !!shouldDisplayDice }),
);

export default setDisplayDice;
