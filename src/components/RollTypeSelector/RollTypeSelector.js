import { connect } from 'react-redux';
import setAttributeRollType from '../../actions/setAttributeRollType';
import RollTypeSelectorView from './RollTypeSelectorView';

/** @param {React.FormEvent<HTMLSelectElement>} event */
const handleOnChange = (event) => setAttributeRollType(event.currentTarget.value);

const mapStateToProps = ({ attributeRollType }) => ({
    selectedType: attributeRollType,
});

const mapDispatchToProps = {
    onSelectType: handleOnChange,
};



export default connect(mapStateToProps, mapDispatchToProps)(RollTypeSelectorView);