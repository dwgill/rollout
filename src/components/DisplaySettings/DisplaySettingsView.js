import React from 'react';
import SectionHeading from '../SectionHeading';
import styles from './styles.module.css';

const DisplaySettingsView = ({
  rollInOrder,
  displayDice,
  forceStale,
  onCheckDisplayDice: handleCheckDisplayDice,
  onCheckRollInOrder: handleCheckRollInOrder,
  onCheckRequireStale: handleCheckRequireStale,
}) => (
  <>
    <SectionHeading>Display Settings</SectionHeading>
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={displayDice}
        onChange={handleCheckDisplayDice}
      />{' '}
      Display Individual Dice
    </label>
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={rollInOrder}
        onChange={handleCheckRollInOrder}
      />{' '}
      Roll Dice in Order
    </label>
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={forceStale}
        onChange={handleCheckRequireStale}
      />{' '}
      No arbitrary rerolls
    </label>
  </>
);

export default DisplaySettingsView;
