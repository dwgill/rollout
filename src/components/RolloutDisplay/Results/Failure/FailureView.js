import React from 'react';
import styles from './styles.module.css';

function fmtNumReqs(numReqs) {
  if (numReqs < 2) {
    return 'requirement';
  } else {
    return 'set of requirements';
  }
}

const FailureView = ({ numReqs }) => (
  <div className={styles.container}>
    <p className={styles.text}>Rolled over 500 times without a valid rollout</p>
    <p className={styles.text}>
      Are you sure this is a realistic {fmtNumReqs(numReqs)}?
    </p>
  </div>
);

export default FailureView;
