import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

/**
 * @typedef ModalProps
 * @prop {React.Component} component
 */

/** @type {React.SFC<ModalProps>} Modal */
const Modal = ({
    disabled,
    component: Component,
    ...rest,
}) => disabled ? null : ReactDOM.createPortal(
    <div className={styles.modalShade}>
        <div className={styles.modal}>
            <Component {...rest} />
        </div>
    </div>,
    document.getElementById('modal-root')
);

export default Modal;