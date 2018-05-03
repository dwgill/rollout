import { connect } from 'react-redux';
import FailureView from './FailureView';

const mapStateToProps = ({ requirements }) => ({
  numReqs: requirements.length,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FailureView);
