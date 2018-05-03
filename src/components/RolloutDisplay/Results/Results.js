import React from 'react';
import { connect } from 'react-redux';
import Failure from './Failure';
import Unordered from './Unordered';
import Ordered from './Ordered';

const mapStateToProps = ({
  rollout: { failure, attributes },
  settings: { rollInOrder, displayDice, displayMods },
}) => ({
  rolloutFailed: Boolean(failure),
  noAttributes: attributes.length === 0,
  orderedScores: Boolean(rollInOrder || displayDice || displayMods),
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
