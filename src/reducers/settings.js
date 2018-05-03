import {
  SET_DISPLAY_DICE,
  SET_ROLL_IN_ORDER,
  SET_FORCE_STALE,
} from '../actions/types';

const initialState = {
  rollInOrder: true,
  displayDice: false,
  forceStale: true,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISPLAY_DICE: {
      const { payload: newDisplayDice } = action;
      const { displayDice: oldDisplayDice } = state;
      return newDisplayDice === oldDisplayDice
        ? state
        : {
            ...state,
            displayDice: newDisplayDice,
          };
    }
    case SET_ROLL_IN_ORDER: {
      const { payload: newRollInOrder } = action;
      const { rollInOrder: oldRollInOrder } = state;
      return newRollInOrder === oldRollInOrder
        ? state
        : {
            ...state,
            rollInOrder: newRollInOrder,
          };
    }
    case SET_FORCE_STALE: {
      const { payload: newForceStale } = action;
      const { forceStale: oldForceStale } = state;
      return newForceStale === oldForceStale
        ? state
        : {
            ...state,
            forceStale: newForceStale,
          };
    }
    default: {
      return state;
    }
  }
};

export default settingsReducer;
