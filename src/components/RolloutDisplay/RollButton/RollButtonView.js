import React from 'react';
import styles from './styles.module.css';

const RollButtonView = ({ onRollout: handleRollout, stale, reqStaleTtoRoll }) =>
  reqStaleTtoRoll && !stale ? (
    <NoButton />
  ) : (
    <Button onRollout={handleRollout} stale={stale} />
  );

const Button = ({ stale, onRollout: handleRollout }) => (
  <button
    className={stale ? styles.btnStale : styles.btnFresh}
    onClick={handleRollout}
  >
    Rollout
  </button>
);

const NoButton = () => (
  <div className={styles.noBtn}>
    <p className={styles.noBtnText}>
      No Arbitrary <br /> Rerolls!
    </p>
  </div>
);

export default RollButtonView;
