import React from 'react';
import Modal from '../../Modal';
import PresetsModalInterior from './PresetsModalInterior';
import styles from './styles.module.css';

const PresetsModal = () => (
  <Modal
    interior={PresetsModalInterior}
    className={styles.modal}
    btnClassName={styles.button}
    btnLabel="Presets"
  />
);

export default PresetsModal;
