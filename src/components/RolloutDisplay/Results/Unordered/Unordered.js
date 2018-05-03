import { connect } from 'react-redux';
import UnorderedView from './UnorderedView';

const mapStateToProps = ({ rollout: { attributes, stale } }) => ({
  attributes,
  stale,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UnorderedView);
