import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  scoreReq,
  netModReq,
  netScoreReq,
} from '../../../../util/requirements';
import replaceRequirements from '../../../../actions/replaceRequirements';
import setAttributeRollType from '../../../../actions/setAttributeRollType';
import setRollInOrder from '../../../../actions/setRollInOrder';
import PresetsModalInteriorView from './PresetsModalInteriorView';

const addSideEffect = doSideEffect => produceValue => (...args) => {
  setTimeout(() => doSideEffect(...args));
  return produceValue(...args);
};

const handleSetColvilleClassic = () => dispatch => {
  dispatch(setRollInOrder(true));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([scoreReq('AT_LEAST', 2, 'AT_LEAST', 15)]));
};

const handleSetColville = () => dispatch => {
  dispatch(setRollInOrder(true));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([netModReq('AT_LEAST', 2)]));
};

const handleSetMercer = () => dispatch => {
  dispatch(setRollInOrder(false));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([netScoreReq('AT_LEAST', 70)]));
};

const handleSetMercerPlus = () => dispatch => {
  dispatch(setRollInOrder(false));
  dispatch(setAttributeRollType('STANDARD'));
  dispatch(replaceRequirements([netScoreReq('AT_LEAST', 75)]));
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { onCompletion: handleCompletion }) => {
  const wrapComplete = addSideEffect(handleCompletion);
  return bindActionCreators(
    {
      onSetColville: wrapComplete(handleSetColville),
      onSetMercer: wrapComplete(handleSetMercer),
      onSetMercerPlus: wrapComplete(handleSetMercerPlus),
      onSetColvilleClassic: wrapComplete(handleSetColvilleClassic),
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PresetsModalInteriorView,
);
