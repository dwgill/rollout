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
  displayHighToLow,
  onCheckDisplayDice,
  onCheckRollInOrder,
  onCheckRequireStale,
  onCheckDisplayMods,
  onSetDisplayHighToLow,
}) => (
  <>
    <SectionHeading>Settings</SectionHeading>
    <Checkbox checked={displayMods} onCheck={onCheckDisplayMods}>
      Display Attribute Modifiers
    </Checkbox>
    <Checkbox checked={displayDice} onCheck={onCheckDisplayDice}>
      Display Individual Dice
    </Checkbox>
    <Checkbox checked={rollInOrder} onCheck={onCheckRollInOrder}>
      Roll Dice in Order
    </Checkbox>
    <Checkbox checked={displayHighToLow} onCheck={onSetDisplayHighToLow}>
      Order Dice from High to Low
    </Checkbox>
    <Checkbox checked={forceStale} onCheck={onCheckRequireStale}>
      No arbitrary rerolls
    </Checkbox>
  </>
);

export default SettingsView;
