import { connect } from 'react-redux';
import addRequirement from '../../../../../actions/addRequirement';
import { minPossibleIndividualScore as getMinPossibleIndividualScore } from '../../../../../selectors';
import { scoreReq } from '../../../../../util/requirements';
import NewScoreReqForm from './NewScoreReqForm';

const mapStateToProps = state => ({
  minPossibleScore: getMinPossibleIndividualScore(state),
});

const doAddRequirement = ({ numScores, score, scoreLimit, numScoresLimit }) =>
  addRequirement(scoreReq(numScoresLimit, numScores, scoreLimit, score));

const mapDispatchToProps = {
  onAddRequirement: doAddRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewScoreReqForm);
