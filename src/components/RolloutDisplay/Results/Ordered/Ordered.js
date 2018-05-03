import { connect } from 'react-redux';
import OrderedView from './OrderedView';

const mapStateToProps = ({
  rollout: { stale, attributes },
  displaySettings: { rollInOrder, displayDice },
}) => ({
  stale,
  attributes,
  displayDice,
  displayAttNames: rollInOrder,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderedView);
