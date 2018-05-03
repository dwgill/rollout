import { connect } from 'react-redux';
import setDisplayDice from '../../actions/setDisplayDice';
import setForceStale from '../../actions/setForceStale';
import setRollInOrder from '../../actions/setRollInOrder';
import setDisplayMods from '../../actions/setDisplayMods';
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

const mapStateToProps = ({
  settings: { rollInOrder, displayDice, forceStale, displayMods },
}) => ({
  rollInOrder,
  displayDice,
  forceStale,
  displayMods,
});

const mapDispatchToProps = {
  onCheckDisplayDice: handleSetDisplayDice,
  onCheckRollInOrder: handleSetRollInOrder,
  onCheckRequireStale: handleSetForceStale,
  onCheckDisplayMods: handleSetDisplayMods,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
