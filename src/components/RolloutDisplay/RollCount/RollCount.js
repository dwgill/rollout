import { connect } from 'react-redux';
import RollCountView from './RollCountView';

const mapStateToProps = ({ rollout: { numRolls, stale } }) => ({
  numRolls,
  stale,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RollCountView);
