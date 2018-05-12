import { connect } from 'react-redux';
import { numRequirements as getNumRequirements } from '../../../../selectors';
import FailureView from './FailureView';

const mapStateToProps = state => ({
  numReqs: getNumRequirements(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FailureView);
