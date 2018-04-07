import pullAt from 'lodash/fp/pullAt';
import {
  ADD_REQUIREMENT,
  REMOVE_REQUIREMENT,
  REPLACE_REQUIREMENTS,
} from '../actions/types';

const initialState = [];

const requirementsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_REQUIREMENT: {
      const newReq = action.payload;
      return state.concat(newReq);
    }
    case REMOVE_REQUIREMENT: {
      const indexToRemove = action.payload;
      return pullAt(indexToRemove)(state);
    }
    case REPLACE_REQUIREMENTS: {
      const newReqs = action.payload;
      return newReqs || initialState;
    }
  }
};

export default requirementsReducer;
