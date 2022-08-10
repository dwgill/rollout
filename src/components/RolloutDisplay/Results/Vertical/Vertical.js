import cls from 'classnames';
import entries from 'lodash/fp/entries';
import isEmpty from 'lodash/fp/isEmpty';
import sum from 'lodash/fp/sum';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import calcMod from '../../../../rollout-core/calculateModifier';
import orderAttributesByName from '../../../../util/orderAttributesByName';
import styles from './styles.module.css';
import {
  displayDice as determineDisplayDice,
  displayMods as determineDisplayMods,
  rollInOrder as determineRollInOrder,
  rolloutAttributes as getRolloutAttributes,
  rolloutIsStale as determineRolloutIsStale,
  displayHighToLow as determineDisplayHighToLow,
} from '../../../../selectors';

const fmtAttrDice = ({ constituents, discarded }) => {
  const included = `(${constituents.join(', ')})`;
  if (isEmpty(discarded)) {
    return included;
  }

  const notIncluded = `[${discarded.join(', ')}]`;
  return `${included} ${notIncluded}`;
};

const fmtMod = (score) => {
  const mod = calcMod(score);
  return mod >= 0 ? `(+${mod})` : `(${mod})`;
};

const mkRenderRow = ({ displayDice, displayMods, displayAttNames, stale }) => ([
  attName,
  attr,
]) => {
  const score = sum(attr.constituents);
  const numSettings = [displayDice, displayMods, displayAttNames].filter(
    (x) => x,
  ).length;
  const className = cls({
    [styles.staleAttribute]: stale,
    [styles.attribute]: !stale,
    [styles.attrFontShortLine]: numSettings <= 1,
    [styles.attrFontMedLine]: numSettings === 2,
    [styles.attrFontLongLine]: numSettings >= 3,
  });
  return (
    <p key={attName} className={className}>
      {displayAttNames ? attName.concat(' ') : ''}
      {score}
      {displayMods ? ' '.concat(fmtMod(score)) : ''}
      {displayDice ? ' '.concat(fmtAttrDice(attr)) : ''}
    </p>
  );
};

export default function Vertical() {
  const stale = useSelector(determineRolloutIsStale);
  const attributes = useSelector(getRolloutAttributes);
  const displayDice = useSelector(determineDisplayDice);
  const displayMods = useSelector(determineDisplayMods);
  const displayAttNames = useSelector(determineRollInOrder);
  const displayHighToLow = useSelector(determineDisplayHighToLow);

  const verboseAttNames = displayAttNames && !(displayDice || displayMods);
  const scoreEntries = useMemo(() => {
    const scoresByName = orderAttributesByName(attributes, verboseAttNames);
    let scoreEntries = entries(scoresByName);
    if (displayHighToLow) {
      scoreEntries = [...scoreEntries].sort(([attr1Name, attr1], [attr2Name, attr2]) => {
        const score1 = sum(attr1.constituents);
        const score2 = sum(attr2.constituents);
        return score2 - score1;
      });
    }
    return scoreEntries;
  }, [attributes, verboseAttNames, displayHighToLow]);

  const renderRow = mkRenderRow({
    stale,
    displayDice,
    displayAttNames,
    displayMods,
  });
  return (
    <div className={styles.container}>
      {scoreEntries.map(renderRow)}
    </div>
  );
};
