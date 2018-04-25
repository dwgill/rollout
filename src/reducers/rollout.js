import {
  DO_ROLLOUT,
  SET_ATTRIBUTE_ROLL_TYPE,
  REMOVE_REQUIREMENT,
  ADD_REQUIREMENT,
  REPLACE_REQUIREMENTS,
  FAIL_ROLLOUT,
  PRESET_COLVILLE,
  PRESET_COLVILLE_CLASSIC,
  PRESET_MERCER,
  PRESET_MERCER_PLUS,
} from '../actions/types';

const initialState = {
  failure: null,
  stale: true,
  numRolls: 0,
  attributes: [],
};

const rolloutReducer = (state = initialState, action) => {
  switch (action.type) {
    // Presets
    case PRESET_COLVILLE:
    case PRESET_COLVILLE_CLASSIC:
    case PRESET_MERCER:
    case PRESET_MERCER_PLUS: {
      return initialState;
    }
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
      const { payload: { newRollout, numRolls } } = action;
      return {
        failure: null,
        stale: false,
        attributes: newRollout,
        numRolls,
      };
    }
    case FAIL_ROLLOUT: {
      const { payload: numRolls } = action;
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
