import { connect } from 'react-redux';
import setDisplayDice from '../../actions/setDisplayDice';
import setRollInOrder from '../../actions/setRollInOrder';
import DisplaySettingsView from './DisplaySettingsView';

/** @param {React.FormEvent<HTMLInputElement>} event */
const handleSetDisplayDice = (event) => setDisplayDice(event.currentTarget.checked);

/** @param {React.FormEvent<HTMLInputElement>} event */
const handleSetRollInOrder = (event) => setRollInOrder(event.currentTarget.checked);

const mapStateToProps = ({
    displaySettings: {
        rollInOrder,
        displayDice,
    }
}) => ({
    rollInOrder,
    displayDice,
});

const mapDispatchToProps = {
    onCheckDisplayDice: handleSetDisplayDice,
    onCheckRollInOrder: handleSetRollInOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySettingsView);