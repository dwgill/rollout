import { combineReducers } from 'redux';
import attributeRollTypeReducer from './attributeRollType';

const consolidatedReducers = combineReducers({
    attributeRollType: attributeRollTypeReducer,
    // rolloutGuarantees: null,
    // displayConfig: null,
});

export default consolidatedReducers;