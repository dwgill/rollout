import { SET_DISPLAY_DICE, SET_ROLL_IN_ORDER } from '../actions/types';

const initialState = {
    rollInOrder: false,
    displayDice: false,
}

const displaySettingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DISPLAY_DICE: {
            const { payload: newDisplayDice } = action;
            const { displayDice: oldDisplayDice } = state;
            return newDisplayDice === oldDisplayDice ? state : {
                ...state,
                displayDice: newDisplayDice,
            };
        }
        case SET_ROLL_IN_ORDER: {
            const { payload: newRollInOrder } = action;
            const { rollInOrder: oldRollInOrder } = state;
            return newRollInOrder === oldRollInOrder ? state : {
                ...state,
                rollInOrder: newRollInOrder,
            };
        }
        default: {
            return state;
        }
    }
}

export default displaySettingsReducer;