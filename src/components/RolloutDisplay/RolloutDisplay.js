import { connect } from 'react-redux';
import RolloutDisplayView from './RolloutDisplayView';
import doRollout from '../../actions/doRollout';

const mapStateToProps = ({
    rollout: {
        stale,
        attributes,
    },
    displaySettings: {
        rollInOrder,
        displayDice,
    }
}) => ({
    attributesAreStale: stale,
    attributes,
    showAtributeNames: rollInOrder,
    displayDice,
});

const mapDispatchToProps = {
    onRollout: doRollout,
};

export default connect(mapStateToProps, mapDispatchToProps)(RolloutDisplayView);