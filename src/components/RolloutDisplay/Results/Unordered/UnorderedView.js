import React from 'react';
import sum from 'lodash/fp/sum';
import styles from './styles.module.css';

const renderAtt = stale => (attr, index, list) => (
  <p className={stale ? styles.staleText : styles.freshText} key={index}>
    {sum(attr.constituents) + (index < list.length - 1 ? ',' : '')}
  </p>
);

const UnorderedView = ({ attributes, stale }) => (
  <div className={styles.container}>
    <div className={styles.row}>{attributes.map(renderAtt(stale))}</div>
  </div>
);

export default UnorderedView;
