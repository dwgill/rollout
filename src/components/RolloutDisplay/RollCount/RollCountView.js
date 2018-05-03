import React from 'react';
import styles from './styles.module.css';

function fmt(numRolls) {
  return numRolls === 1 ? '1 roll' : `${numRolls} rolls`;
}

const RollCountView = ({ numRolls, stale }) => (
  <p className={stale ? styles.stale : styles.fresh}>{fmt(numRolls)}</p>
);

export default RollCountView;
