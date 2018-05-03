import React from 'react';
import styles from './styles.module.css';

const RollButtonView = ({
  onRollout: handleRollout,
  stale,
  reqStaleTtoRoll,
}) => (
  <button
    className={styles.btn}
    onClick={handleRollout}
    disabled={reqStaleTtoRoll && !stale}
  >
    Rollout
  </button>
);

export default RollButtonView;
