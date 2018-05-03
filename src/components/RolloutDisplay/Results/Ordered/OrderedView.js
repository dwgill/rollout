import React from 'react';
import sum from 'lodash/fp/sum';
import isEmpty from 'lodash/fp/isEmpty';
import entries from 'lodash/fp/entries';
import orderAttributesByName from '../../../../util/orderAttributesByName';
import { calcMod } from '../../../../util/modifiers';
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

  return (
    <p
      key={attName}
      className={stale ? styles.staleAttribute : styles.attribute}
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
  const scoresByName = orderAttributesByName(attributes, true);
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
