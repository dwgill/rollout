import { connect } from 'react-redux';
import setDisplayDice from '../../actions/setDisplayDice';
import setDisplayHighToLow from '../../actions/setDisplayHighToLow';
import setDisplayMods from '../../actions/setDisplayMods';
import setForceStale from '../../actions/setForceStale';
import setRollInOrder from '../../actions/setRollInOrder';
import {
  displayDice as getDisplayDice,
  displayMods as getDisplayMods,
  forceStale as getForceStale,
  rollInOrder as getRollInOrder,
  displayHighToLow as getDisplayHighToLow,
} from '../../selectors';
import SettingsView from './SettingsView';

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetDisplayDice(event) {
  return setDisplayDice(!!event.currentTarget.checked);
}

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetRollInOrder(event) {
  return setRollInOrder(!!event.currentTarget.checked);
}

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetForceStale(event) {
  return setForceStale(!!event.currentTarget.checked);
}

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetDisplayMods(event) {
  return setDisplayMods(!!event.currentTarget.checked);
}

/** @param {React.FormEvent<HTMLInputElement>} event */
function handleSetDisplayHighToLow(event) {
  return setDisplayHighToLow(!!event.currentTarget.checked);
}

const mapStateToProps = (state) => ({
  rollInOrder: getRollInOrder(state),
  displayDice: getDisplayDice(state),
  forceStale: getForceStale(state),
  displayMods: getDisplayMods(state),
  displayHighToLow: getDisplayHighToLow(state),
});

const mapDispatchToProps = {
  onCheckDisplayDice: handleSetDisplayDice,
  onCheckRollInOrder: handleSetRollInOrder,
  onCheckRequireStale: handleSetForceStale,
  onCheckDisplayMods: handleSetDisplayMods,
  onSetDisplayHighToLow: handleSetDisplayHighToLow,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
