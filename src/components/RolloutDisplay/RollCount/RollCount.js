import { connect } from 'react-redux';
import {
  numRollsForLastRollout as getNumRollsForLastRollout,
  rolloutIsStale as determineRolloutIsStale,
} from '../../../selectors';
import RollCountView from './RollCountView';

const mapStateToProps = state => ({
  numRolls: getNumRollsForLastRollout(state),
  stale: determineRolloutIsStale(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RollCountView);
