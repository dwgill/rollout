import { connect } from 'react-redux';
import { noRequirements as determineNoRequirements } from '../../selectors';
import RequirementDisplayView from './RequirementDisplayView';

const mapStateToProps = state => ({
  noReqs: determineNoRequirements(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  RequirementDisplayView,
);
