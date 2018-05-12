import { connect } from 'react-redux';
import setAttributeRollType from '../../actions/setAttributeRollType';
import { attributeRollType as getAttributeRollType } from '../../selectors';
import RollTypeSelectorView from './RollTypeSelectorView';

/** @param {React.FormEvent<HTMLSelectElement>} event */
const handleOnChange = event => setAttributeRollType(event.currentTarget.value);

const mapStateToProps = state => ({
  selectedType: getAttributeRollType(state),
});

const mapDispatchToProps = {
  onSelectType: handleOnChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  RollTypeSelectorView,
);
