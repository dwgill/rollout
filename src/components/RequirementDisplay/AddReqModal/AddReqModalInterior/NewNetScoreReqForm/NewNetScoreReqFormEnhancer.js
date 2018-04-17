import { connect } from 'react-redux';
import addRequirement from '../../../../../actions/addRequirement';
import { netScoreReq } from '../../../../../util/requirements';
import NewNetScoreReqForm from './NewNetScoreReqForm';

const calcMinTotalScore = rollType => {
  if (rollType.toUpperCase() === 'AUGMENTED') {
    return 8 * 6;
  } else {
    return 3 * 6;
  }
};

const mapStateToProps = ({ attributeRollType }) => ({
  minPossibleNetScore: calcMinTotalScore(attributeRollType),
});

const doAddRequirement = ({ limit, value }) =>
  addRequirement(netScoreReq(limit, value));

const mapDispatchToProps = {
  onAddRequirement: doAddRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNetScoreReqForm);
