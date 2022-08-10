import sum from 'lodash/fp/sum';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  displayHighToLow as getDisplayHighToLow, rolloutAttributes as getRolloutAttributes,
  rolloutIsStale as determineRolloutIsStale
} from '../../../../selectors';
import styles from './styles.module.css';

const renderAtt = (stale) => (attr, index, list) => (
  <p className={stale ? styles.staleText : styles.freshText} key={index}>
    {sum(attr.constituents) + (index < list.length - 1 ? ',' : '')}
  </p>
);

const UnorderedView = () => {
  const attributes = useSelector(getRolloutAttributes);
  const stale = useSelector(determineRolloutIsStale);
  const displayHighToLow = useSelector(getDisplayHighToLow);

  const sortedAttributes = useMemo(() => {
    if (!displayHighToLow) return attributes;
    return [...attributes].sort((attr1, attr2) => {
      return sum(attr2.constituents) - sum(attr1.constituents);
    });
  }, [attributes, displayHighToLow]);
  return (
    <div className={styles.container}>
      <div className={styles.row}>{sortedAttributes.map(renderAtt(stale))}</div>
    </div>
  );
};

export default UnorderedView;
