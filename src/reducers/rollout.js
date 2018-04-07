import {
  DO_ROLLOUT,
  SET_ATTRIBUTE_ROLL_TYPE,
  REMOVE_REQUIREMENT,
  ADD_REQUIREMENT,
  REPLACE_REQUIREMENTS,
} from '../actions/types';

const initialState = {
  stale: true,
  numRolls: 0,
  attributes: [
    {
      constituents: [3, 3, 4],
      discarded: [],
    },
    {
      constituents: [3, 3, 4],
      discarded: [],
    },
    {
      constituents: [3, 3, 4],
      discarded: [],
    },
    {
      constituents: [3, 3, 4],
      discarded: [],
    },
    {
      constituents: [3, 3, 4],
      discarded: [],
    },
    {
      constituents: [3, 3, 4],
      discarded: [],
    },
  ],
};

const rolloutReducer = (state = initialState, action) => {
  switch (action.type) {
    // Staling Actions
    case REMOVE_REQUIREMENT:
    case ADD_REQUIREMENT:
    case REPLACE_REQUIREMENTS:
    case SET_ATTRIBUTE_ROLL_TYPE: {
      return state.stale
        ? state
        : {
            ...state,
            stale: true,
          };
    }
    // Non-Staling Actions
    case DO_ROLLOUT: {
      const { newRollout, numRolls } = action;
      return {
        stale: false,
        attributes: newRollout,
        numRolls,
      };
    }
    default: {
      return state;
    }
  }
};

export default rolloutReducer;
