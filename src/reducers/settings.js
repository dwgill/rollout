import { createReducer } from '@reduxjs/toolkit';
import setDisplayDice from '../actions/setDisplayDice';
import setDisplayHighToLow from '../actions/setDisplayHighToLow';
import setDisplayMods from '../actions/setDisplayMods';
import setForceStale from '../actions/setForceStale';
import setRollInOrder from '../actions/setRollInOrder';

const initialState = {
  rollInOrder: true,
  displayHighToLow: false,
  displayDice: false,
  forceStale: true,
  displayMods: false,
};

const settingsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setDisplayHighToLow, (state, action) => {
    state.displayHighToLow = !!action.payload;
    if (action.payload) {
      state.rollInOrder = false;
    }
  });
  builder.addCase(setRollInOrder, (state, action) => {
    state.rollInOrder = !!action.payload;
    if (action.payload) {
      state.displayHighToLow = false;
    }
  });
  builder.addCase(setDisplayDice, (state, action) => {
    state.displayDice = !!action.payload;
  });
  builder.addCase(setForceStale, (state, action) => {
    state.forceStale = !!action.payload;
  });
  builder.addCase(setDisplayMods, (state, action) => {
    state.displayMods = !!action.payload;
  });
});

export default settingsReducer;
