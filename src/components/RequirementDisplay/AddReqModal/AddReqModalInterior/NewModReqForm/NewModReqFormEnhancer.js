import { connect } from 'react-redux';
import addRequirement from '../../../../../actions/addRequirement';
import { netModReq } from '../../../../../util/requirements';
import NewModReqForm from './NewModReqForm';

// 3 -4
const calcMinMod = rollType => {
  if (rollType.toUpperCase() === 'AUGMENTED') {
    return -1 * 6;
  } else {
    return -4 * 6;
  }
};

const mapStateToProps = ({ attributeRollType }) => ({
  minPossibleMod: calcMinMod(attributeRollType),
});

const doAddRequirement = ({ limit, value }) =>
  addRequirement(netModReq(limit, value));

const mapDispatchToProps = {
  onAddRequirement: doAddRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewModReqForm);
