import React from 'react';
import { useSelector } from 'react-redux';
import {
  noAttributes as determineNoAttributes,
  rolloutHasFailed as determineRolloutHasFailed,
  verticallyPresentedScores as determineVerticallyPresentedScores
} from '../../../selectors';
import Failure from './Failure';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

const Results = () => {
  const rolloutFailed = useSelector(determineRolloutHasFailed);
  const noAttributes = useSelector(determineNoAttributes);
  const orderedScores = useSelector(determineVerticallyPresentedScores);

  if (rolloutFailed) {
    return <Failure />;
  } else if (noAttributes) {
    return null;
  } else if (orderedScores) {
    return <Vertical />;
  } else {
    return <Unordered />;
  }
};

export default Results;
