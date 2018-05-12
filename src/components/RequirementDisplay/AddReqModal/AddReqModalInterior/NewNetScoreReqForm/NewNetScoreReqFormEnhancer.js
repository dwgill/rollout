import { connect } from 'react-redux';
import addRequirement from '../../../../../actions/addRequirement';
import { minPossibleTotalScore as getMinPossibleTotalScore } from '../../../../../selectors';
import { netScoreReq } from '../../../../../util/requirements';
import NewNetScoreReqForm from './NewNetScoreReqForm';

const mapStateToProps = state => ({
  minPossibleNetScore: getMinPossibleTotalScore(state),
});

const doAddRequirement = ({ limit, value }) =>
  addRequirement(netScoreReq(limit, value));

const mapDispatchToProps = {
  onAddRequirement: doAddRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNetScoreReqForm);
