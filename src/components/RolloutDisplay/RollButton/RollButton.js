import { connect } from 'react-redux';
import doRollout from '../../../actions/doRollout';
import {
  forceStale as determineForceStale,
  rolloutIsStale as determineRolloutIsStale,
} from '../../../selectors';
import RollButtonView from './RollButtonView';

const mapStateToProps = state => ({
  stale: determineRolloutIsStale(state),
  reqStaleTtoRoll: determineForceStale(state),
});

const mapDispatchToProps = {
  onRollout: doRollout,
};

export default connect(mapStateToProps, mapDispatchToProps)(RollButtonView);
