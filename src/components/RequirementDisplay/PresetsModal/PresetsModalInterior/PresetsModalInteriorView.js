import React from 'react';
import styles from './styles.module.css';

const PresetsModalInteriorView = ({
  onSetColville: handleSetColville,
  onSetColvilleClassic: handleSetColvilleClassic,
  onSetMercer: handleSetMercer,
}) => (
  <>
    <h2 className={styles.title}>Preset Requirements</h2>
    <div onClick={handleSetColville}>colville</div>
    <div onClick={handleSetColvilleClassic}>colville classic</div>
    <div onClick={handleSetMercer}>mercer</div>
  </>
);

export default PresetsModalInteriorView;
