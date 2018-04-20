import { connect } from 'react-redux';
import RolloutDisplayView from './RolloutDisplayView';
import doRollout from '../../actions/doRollout';

const mapStateToProps = ({
  rollout: { stale, attributes, numRolls, failure },
  displaySettings: { rollInOrder, displayDice, forceStale },
  requirements,
}) => ({
  requireStaleAttsToRoll: forceStale,
  attributesAreStale: stale,
  attributes,
  showAtributeNames: rollInOrder,
  displayDice,
  numRolls,
  rolloutFailed: failure,
  numRequirements: requirements.length,
});

const mapDispatchToProps = {
  onRollout: doRollout,
};

export default connect(mapStateToProps, mapDispatchToProps)(RolloutDisplayView);
