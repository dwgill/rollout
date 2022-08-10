import { createAction } from '@reduxjs/toolkit';
import { SET_DISPLAY_MODS } from './types';

const setDisplayMods = createAction(SET_DISPLAY_MODS, (shouldDisplayMods) => ({
  payload: !!shouldDisplayMods,
}));

export default setDisplayMods;
