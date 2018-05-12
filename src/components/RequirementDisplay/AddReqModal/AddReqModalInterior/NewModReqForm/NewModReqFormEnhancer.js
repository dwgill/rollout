import { connect } from 'react-redux';
import addRequirement from '../../../../../actions/addRequirement';
import { minPossibleNetMod as getMinPossibleMod } from '../../../../../selectors';
import { netModReq } from '../../../../../util/requirements';
import NewModReqForm from './NewModReqForm';

const mapStateToProps = state => ({
  minPossibleMod: getMinPossibleMod(state),
});

const doAddRequirement = ({ limit, value }) =>
  addRequirement(netModReq(limit, value));

const mapDispatchToProps = {
  onAddRequirement: doAddRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewModReqForm);
