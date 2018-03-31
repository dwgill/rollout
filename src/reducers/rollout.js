import { DO_ROLLOUT, SET_ATTRIBUTE_ROLL_TYPE } from '../actions/types';

const initialState = {
    stale: true,
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
}

const rolloutReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ATTRIBUTE_ROLL_TYPE: {
            return {
                ...state,
                stale: true,
            };
        }
        case DO_ROLLOUT: {
            return {
                stale: false,
                attributes: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}

export default rolloutReducer;