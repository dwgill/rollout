import { combineReducers } from 'redux';
import attributeRollTypeReducer from './attributeRollType';
import displaySettingsReducer from './displaySettings';
import rolloutReducer from './rollout';
import requirementsReducer from './requirements';

const consolidatedReducers = combineReducers({
  attributeRollType: attributeRollTypeReducer,
  displaySettings: displaySettingsReducer,
  rollout: rolloutReducer,
  requirements: requirementsReducer,
});

export default consolidatedReducers;
