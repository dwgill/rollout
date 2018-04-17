import { connect } from 'react-redux';
import addRequirement from '../../../../../actions/addRequirement';
import { scoreReq } from '../../../../../util/requirements';
import NewScoreReqForm from './NewScoreReqForm';

const calcMinScore = rollType => {
  if (rollType.toUpperCase() === 'AUGMENTED') {
    return 8;
  } else {
    return 3;
  }
};

const mapStateToProps = ({ attributeRollType }) => ({
  minPossibleScore: calcMinScore(attributeRollType),
});

const doAddRequirement = ({ numScores, score, scoreLimit, numScoresLimit }) =>
  addRequirement(scoreReq(numScoresLimit, numScores, scoreLimit, score));

const mapDispatchToProps = {
  onAddRequirement: doAddRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewScoreReqForm);
