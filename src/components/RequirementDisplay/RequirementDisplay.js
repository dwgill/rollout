import RequirementDisplayView from './RequirementDisplayView';
import { connect } from 'react-redux';

const mapStateToProps = ({ requirements }) => ({
  noReqs: !requirements.length || requirements.length < 1,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  RequirementDisplayView,
);
