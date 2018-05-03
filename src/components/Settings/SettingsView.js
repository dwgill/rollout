import React from 'react';
import SectionHeading from '../SectionHeading';
import styles from './styles.module.css';

const Checkbox = ({ checked, onCheck, children }) => (
  <label className={styles.label}>
    <input type="checkbox" checked={checked} onChange={onCheck} /> {children}
  </label>
);

const SettingsView = ({
  rollInOrder,
  displayDice,
  forceStale,
  displayMods,
  onCheckDisplayDice: handleCheckDisplayDice,
  onCheckRollInOrder: handleCheckRollInOrder,
  onCheckRequireStale: handleCheckRequireStale,
  onCheckDisplayMods: handleCheckDisplayMods,
}) => (
  <>
    <SectionHeading>Settings</SectionHeading>
    <Checkbox checked={displayMods} onCheck={handleCheckDisplayMods}>
      Display Attribute Modifiers
    </Checkbox>
    <Checkbox checked={displayDice} onCheck={handleCheckDisplayDice}>
      Display Individual Dice
    </Checkbox>
    <Checkbox checked={rollInOrder} onCheck={handleCheckRollInOrder}>
      Roll Dice in Order
    </Checkbox>
    <Checkbox checked={forceStale} onCheck={handleCheckRequireStale}>
      No arbitrary rerolls
    </Checkbox>
  </>
);

export default SettingsView;
