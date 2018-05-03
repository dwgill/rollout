import React from 'react';
import RollCount from './RollCount';
import styles from './styles.module.css';
import RollButton from './RollButton';
import Results from './Results';

const RolloutDisplay = () => (
  <>
    <div className={styles.topPart}>
      <Results />
    </div>
    <div className={styles.bottomPart}>
      <RollCount />
      <RollButton />
    </div>
  </>
);

export default RolloutDisplay;
