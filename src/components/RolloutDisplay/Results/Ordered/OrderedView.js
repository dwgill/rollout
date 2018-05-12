import cls from 'classnames';
import entries from 'lodash/fp/entries';
import isEmpty from 'lodash/fp/isEmpty';
import sum from 'lodash/fp/sum';
import React from 'react';
import { calcMod } from '../../../../util/modifiers';
import orderAttributesByName from '../../../../util/orderAttributesByName';
import styles from './styles.module.css';

const fmtAttrDice = ({ constituents, discarded }) => {
  const included = `(${constituents.join(', ')})`;
  if (isEmpty(discarded)) {
    return included;
  }

  const notIncluded = `[${discarded.join(', ')}]`;
  return `${included} ${notIncluded}`;
};

const fmtMod = score => {
  const mod = calcMod(score);
  return mod >= 0 ? `(+${mod})` : `(${mod})`;
};

const mkRenderRow = ({ displayDice, displayMods, displayAttNames, stale }) => ([
  attName,
  attr,
]) => {
  const score = sum(attr.constituents);
  const numSettings = [displayDice, displayMods, displayAttNames].filter(x => x).length;
  const className = cls({
    [styles.staleAttribute]: stale,
    [styles.attribute]: !stale,
    [styles.attrFontShortLine]: numSettings <= 1,
    [styles.attrFontMedLine]: numSettings === 2,
    [styles.attrFontLongLine]: numSettings >= 3,
  });
  return (
    <p
      key={attName}
      className={className}
    >
      {displayAttNames ? attName.concat(' ') : ''}
      {score}
      {displayMods ? ' '.concat(fmtMod(score)) : ''}
      {displayDice ? ' '.concat(fmtAttrDice(attr)) : ''}
    </p>
  );
};

const OrderedView = ({
  stale,
  attributes,
  displayDice,
  displayMods,
  displayAttNames,
}) => {
  const verboseAttNames = displayAttNames && !(displayDice || displayMods);
  const scoresByName = orderAttributesByName(attributes, verboseAttNames);
  const renderRow = mkRenderRow({
    stale,
    displayDice,
    displayAttNames,
    displayMods,
  });
  return (
    <div className={styles.container}>
      {entries(scoresByName).map(renderRow)}
    </div>
  );
};

export default OrderedView;
