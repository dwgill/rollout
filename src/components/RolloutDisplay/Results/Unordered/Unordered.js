import { connect } from 'react-redux';
import {
  rolloutAttributes as getRolloutAttributes,
  rolloutIsStale as determineRolloutIsStale,
} from '../../../../selectors';
import UnorderedView from './UnorderedView';

const mapStateToProps = state => ({
  attributes: getRolloutAttributes(state),
  stale: determineRolloutIsStale(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UnorderedView);
