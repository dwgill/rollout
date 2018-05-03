import React from 'react';
import sum from 'lodash/fp/sum';
import isEmpty from 'lodash/fp/isEmpty';
import entries from 'lodash/fp/entries';
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

const mkRenderRow = ({ displayDice, displayAttNames, stale }) => ([
  attName,
  attr,
]) => (
  <p key={attName} className={stale ? styles.staleAttribute : styles.attribute}>
    {displayAttNames ? attName.concat(' ') : ''}
    {sum(attr.constituents)}
    {displayDice ? ' '.concat(fmtAttrDice(attr)) : ''}
  </p>
);

const OrderedView = ({ stale, attributes, displayDice, displayAttNames }) => {
  const scoresByName = orderAttributesByName(attributes, true);
  const renderRow = mkRenderRow({ stale, displayDice, displayAttNames });
  return (
    <div className={styles.container}>
      {entries(scoresByName).map(renderRow)}
    </div>
  );
};

export default OrderedView;
