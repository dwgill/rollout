import { combineReducers } from 'redux';
import attributeRollTypeReducer from './attributeRollType';
import displaySettingsReducer from './displaySettings';

const consolidatedReducers = combineReducers({
    attributeRollType: attributeRollTypeReducer,
    displaySettings: displaySettingsReducer,
    // displayConfig: null,
});

export default consolidatedReducers;