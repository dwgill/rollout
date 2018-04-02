import { combineReducers } from 'redux';
import attributeRollTypeReducer from './attributeRollType';
import displaySettingsReducer from './displaySettings';
import rolloutReducer from './rollout';

const consolidatedReducers = combineReducers({
  attributeRollType: attributeRollTypeReducer,
  displaySettings: displaySettingsReducer,
  rollout: rolloutReducer,
});

export default consolidatedReducers;
