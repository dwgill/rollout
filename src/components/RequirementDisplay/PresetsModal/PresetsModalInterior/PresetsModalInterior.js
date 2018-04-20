import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  scoreReq,
  netModReq,
  netScoreReq,
} from '../../../../util/requirements';
import replaceRequirements from '../../../../actions/replaceRequirements';
import PresetsModalInteriorView from './PresetsModalInteriorView';

const addSideEffect = doSideEffect => produceValue => (...args) => {
  setTimeout(() => doSideEffect(...args));
  return produceValue(...args);
};

const handleSetColvilleClassic = () =>
  replaceRequirements([scoreReq('AT_LEAST', 2, 'AT_LEAST', 15)]);

const handleSetColville = () => replaceRequirements([netModReq('AT_LEAST', 2)]);

const handleSetMercer = () => replaceRequirements([netScoreReq('AT_LEAST', 70)]);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { onCompletion: handleCompletion }) => {
  const wrapComplete = addSideEffect(handleCompletion);
  return bindActionCreators({
    onSetColville: wrapComplete(handleSetColville),
    onSetMercer: wrapComplete(handleSetMercer),
    onSetColvilleClassic: wrapComplete(handleSetColvilleClassic),
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PresetsModalInteriorView,
);
