import { types as rollTypes } from '../util/attributeRolls';
import keys from 'lodash/fp/keys';
import { SET_ATTRIBUTE_ROLL_TYPE } from '../actions/types';

const validTypes = keys(rollTypes).sort();

const initialState = validTypes.slice(-1).pop();

const rolloutTypeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ATTRIBUTE_ROLL_TYPE: {
            const { payload: newAttrRollType } = action;
            return validTypes.includes(newAttrRollType) ? newAttrRollType : state;
        }
        default: {
            return state;
        }
    }
}

export default rolloutTypeReducer;