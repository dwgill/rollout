import { SET_DISPLAY_MODS } from './types';

const setDisplayMods = shouldDisplayMods => ({
  type: SET_DISPLAY_MODS,
  payload: shouldDisplayMods,
});

export default setDisplayMods;
