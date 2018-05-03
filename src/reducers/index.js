import { combineReducers } from 'redux';
import attributeRollTypeReducer from './attributeRollType';
import settingsReducer from './settings';
import rolloutReducer from './rollout';
import requirementsReducer from './requirements';

const consolidatedReducers = combineReducers({
  attributeRollType: attributeRollTypeReducer,
  settings: settingsReducer,
  rollout: rolloutReducer,
  requirements: requirementsReducer,
});

export default consolidatedReducers;
