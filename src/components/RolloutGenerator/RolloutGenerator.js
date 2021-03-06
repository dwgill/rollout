import React from 'react';
import RollTypeSelector from '../RollTypeSelector';
import styles from './styles.module.css';
import Settings from '../Settings';
import RequirementDisplay from '../RequirementDisplay';
import RolloutDisplay from '../RolloutDisplay';

const AttributeGenerator = () => (
  <div className={styles.container}>
    <div className={styles.leftSide}>
      <div className={styles.child}>
        <RollTypeSelector />
      </div>
      <div className={styles.child}>
        <RequirementDisplay />
      </div>
      <div className={styles.child}>
        <Settings />
      </div>
    </div>
    <div className={styles.rightSide}>
      <div className={styles.rolloutResult}>
        <RolloutDisplay />
      </div>
    </div>
  </div>
);

export default AttributeGenerator;
