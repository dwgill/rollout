import { connect } from 'react-redux';
import {
  displayDice as determineDisplayDice,
  displayMods as determineDisplayMods,
  rollInOrder as determineRollInOrder,
  rolloutAttributes as getRolloutAttributes,
  rolloutIsStale as determineRolloutIsStale,
} from '../../../../selectors';
import OrderedView from './OrderedView';

const mapStateToProps = state => ({
  stale: determineRolloutIsStale(state),
  attributes: getRolloutAttributes(state),
  displayDice: determineDisplayDice(state),
  displayMods: determineDisplayMods(state),
  displayAttNames: determineRollInOrder(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderedView);
