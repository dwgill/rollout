import { connect } from 'react-redux';
import doRollout from '../../../actions/doRollout';
import RollButtonView from './RollButtonView';

const mapStateToProps = ({
  settings: { forceStale },
  rollout: { stale },
}) => ({
  stale,
  reqStaleTtoRoll: forceStale,
});

const mapDispatchToProps = {
  onRollout: doRollout,
};

export default connect(mapStateToProps, mapDispatchToProps)(RollButtonView);
