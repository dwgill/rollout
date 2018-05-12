import { connect } from 'react-redux';
import setDisplayDice from '../../actions/setDisplayDice';
import setDisplayMods from '../../actions/setDisplayMods';
import setForceStale from '../../actions/setForceStale';
import setRollInOrder from '../../actions/setRollInOrder';
import {
  displayDice as getDisplayDice,
  displayMods as getDisplayMods,
  forceStale as getForceStale,
  rollInOrder as getRollInOrder,
} from '../../selectors';
import SettingsView from './SettingsView';

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetDisplayDice(event) {
  return setDisplayDice(event.currentTarget.checked);
}

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetRollInOrder(event) {
  return setRollInOrder(event.currentTarget.checked);
}

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetForceStale(event) {
  return setForceStale(event.currentTarget.checked);
}

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetDisplayMods(event) {
  return setDisplayMods(event.currentTarget.checked);
}

const mapStateToProps = state => ({
  rollInOrder: getRollInOrder(state),
  displayDice: getDisplayDice(state),
  forceStale: getForceStale(state),
  displayMods: getDisplayMods(state),
});

const mapDispatchToProps = {
  onCheckDisplayDice: handleSetDisplayDice,
  onCheckRollInOrder: handleSetRollInOrder,
  onCheckRequireStale: handleSetForceStale,
  onCheckDisplayMods: handleSetDisplayMods,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
