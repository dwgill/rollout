import { connect } from 'react-redux';
import OrderedView from './OrderedView';

const mapStateToProps = ({
  rollout: { stale, attributes },
  settings: { rollInOrder, displayDice, displayMods },
}) => ({
  stale,
  attributes,
  displayDice,
  displayMods,
  displayAttNames: rollInOrder,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderedView);
