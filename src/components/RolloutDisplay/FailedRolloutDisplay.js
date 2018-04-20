import React from 'react';
import styles from './styles.module.css';
// import random from 'lodash/fp/random';

const genStyle = () => ({});

const fmtNumReqs = numReqs =>
  numReqs < 2 ? 'requirement' : 'set of requirements';

const FailedRolloutDisplay = ({ numRequirements }) => (
  <div className={styles.failedRolloutDisplay}>
    <p style={genStyle()} className={styles.failedRolloutText}>
      Rolled over 500 times without a valid rollout
    </p>
    <p style={genStyle()} className={styles.failedRolloutText}>
      Are you sure this is a realistic {fmtNumReqs(numRequirements)}?
    </p>
  </div>
);

export default FailedRolloutDisplay;
