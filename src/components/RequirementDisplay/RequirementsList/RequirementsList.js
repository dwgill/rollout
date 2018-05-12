import { connect } from 'react-redux';
import removeRequirement from '../../../actions/removeRequirement';
import { requirementsAsText as getRequirementsAsText } from '../../../selectors';
import RequirementsListView from './RequirementsListView';

const mapStateToProps = state => ({
  requirements: getRequirementsAsText(state),
});

const mapDispatchToProps = {
  onRemoveRequirement: removeRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  RequirementsListView,
);
