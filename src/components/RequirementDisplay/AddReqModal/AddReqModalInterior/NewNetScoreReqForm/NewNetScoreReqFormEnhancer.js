import { connect } from 'react-redux';
import { addNetScoreRequirement } from '../../../../../actions/addRequirement';
import { minPossibleTotalScore as getMinPossibleTotalScore } from '../../../../../selectors';
import NewNetScoreReqForm from './NewNetScoreReqForm';

const mapStateToProps = state => ({
  minPossibleNetScore: getMinPossibleTotalScore(state),
});

const mapDispatchToProps = {
  onAddRequirement: addNetScoreRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNetScoreReqForm);
