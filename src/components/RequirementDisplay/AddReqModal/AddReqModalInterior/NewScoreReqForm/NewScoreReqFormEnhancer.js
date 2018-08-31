import { connect } from 'react-redux';
import { addScoreRequirement } from '../../../../../actions/addRequirement';
import { minPossibleIndividualScore as getMinPossibleIndividualScore } from '../../../../../selectors';
import NewScoreReqForm from './NewScoreReqForm';

const mapStateToProps = state => ({
  minPossibleScore: getMinPossibleIndividualScore(state),
});

const mapDispatchToProps = {
  onAddRequirement: addScoreRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewScoreReqForm);
