import React from 'react';
import { connect } from 'react-redux';
import {
  noAttributes as determineNoAttributes,
  rolloutHasFailed as determineRolloutHasFailed,
  verticallyPresentedScores as determineVerticallyPresentedScores,
} from '../../../selectors';
import Failure from './Failure';
import Ordered from './Ordered';
import Unordered from './Unordered';

const mapStateToProps = state => ({
  rolloutFailed: determineRolloutHasFailed(state),
  noAttributes: determineNoAttributes(state),
  orderedScores: determineVerticallyPresentedScores(state),
});

const mapDispatchToProps = {};

const Results = ({ rolloutFailed, noAttributes, orderedScores }) => {
  if (rolloutFailed) {
    return <Failure />;
  } else if (noAttributes) {
    return null;
  } else if (orderedScores) {
    return <Ordered />;
  } else {
    return <Unordered />;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
