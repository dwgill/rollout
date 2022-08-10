import { createAction } from '@reduxjs/toolkit';
import { SET_DISPLAY_HIGH_TO_LOW } from './types';

const setDisplayHighToLow = createAction(
  SET_DISPLAY_HIGH_TO_LOW,
  (shouldDisplayHighToLow) => ({
    payload: !!shouldDisplayHighToLow,
  }),
);

export default setDisplayHighToLow;
