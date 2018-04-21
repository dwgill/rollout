import {
  DO_ROLLOUT,
  SET_ATTRIBUTE_ROLL_TYPE,
  REMOVE_REQUIREMENT,
  ADD_REQUIREMENT,
  REPLACE_REQUIREMENTS,
  FAIL_ROLLOUT,
} from '../actions/types';

const initialState = {
  failure: null,
  stale: true,
  numRolls: 0,
  attributes: [],
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
        failure: null,
        stale: false,
        attributes: newRollout,
        numRolls,
      };
    }
    case FAIL_ROLLOUT: {
      const { numRolls } = action;
      return {
        ...state,
        stale: false,
        failure: true,
        numRolls,
      };
    }
    default: {
      return state;
    }
  }
};

export default rolloutReducer;
