import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import presetColville from '../../../../actions/presetColville';
import presetColvilleClassic from '../../../../actions/presetColvilleClassic';
import presetMercer from '../../../../actions/presetMercer';
import presetMercerPlus from '../../../../actions/presetMercerPlus';
import PresetsModalInteriorView from './PresetsModalInteriorView';

const addSideEffect = doSideEffect => produceValue => (...args) => {
  setTimeout(() => doSideEffect(...args));
  return produceValue(...args);
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { onCompletion: handleCompletion }) => {
  const wrapComplete = addSideEffect(handleCompletion);
  return bindActionCreators(
    {
      onSetColville: wrapComplete(presetColville),
      onSetMercer: wrapComplete(presetMercer),
      onSetMercerPlus: wrapComplete(presetMercerPlus),
      onSetColvilleClassic: wrapComplete(presetColvilleClassic),
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PresetsModalInteriorView,
);
