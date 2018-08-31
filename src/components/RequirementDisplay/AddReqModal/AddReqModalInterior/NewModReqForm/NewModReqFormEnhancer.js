import { connect } from 'react-redux';
import { addNetModRequirement } from '../../../../../actions/addRequirement';
import { minPossibleNetMod as getMinPossibleMod } from '../../../../../selectors';
import NewModReqForm from './NewModReqForm';

const mapStateToProps = state => ({
  minPossibleMod: getMinPossibleMod(state),
});

const mapDispatchToProps = {
  onAddRequirement: addNetModRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewModReqForm);
