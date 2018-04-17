import React from 'react';
import Modal from '../../Modal';
import AddReqModalInterior from './AddReqModalInterior';
import styles from './styles.module.css';

const AddReqModal = () => (
  <Modal
    interior={AddReqModalInterior}
    className={styles.modal}
    btnClassName={styles.button}
    btnLabel="Add"
  />
);

export default AddReqModal;
