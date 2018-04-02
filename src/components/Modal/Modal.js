import React from 'react';
import ReactDOM from 'react-dom';
import cls from 'classnames';
import styles from './styles.module.css';

const stopPropagation = (/** @type React.SyntheticEvent */ event) => event.stopPropagation();

/** 
 * @typedef ModalProps
 * @prop {React.Component} component
 * @prop {string} [className='']
 * @prop {string} [btnClassName='']
 * @prop {string} [btnLabel='Open Modal']
 */

/**
 * @typedef ModalState
 * @prop {boolean} enabled
 */

/** @type React.PureComponent<ModalProps, ModalState> */
class Modal extends React.PureComponent {
    static defaultProps = {
        className: '',
        btnClassName: '',
        btnLabel: 'Open Modal',
    }

    constructor(props) {
        super(props);

        this.state = {
            enabled: false,
        }

        this.enableModal = this.enableModal.bind(this);
        this.disableModal = this.disableModal.bind(this);
    }

    enableModal() {
        this.setState({ enabled: true });
    }

    disableModal() {
        this.setState({enabled: false });
    }

    render() {
        const {
            component: Component,
            className,
            btnClassName,
            btnLabel,
            ...rest
        } = this.props;
        const { enabled } = this.state;
        return (
            <>
                <button onClick={this.enableModal} className={styles.button}>{btnLabel}</button>
                {enabled && ReactDOM.createPortal(
                    <div className={styles.modalShade} onClick={this.disableModal}>
                        <div className={cls(styles.modalCommon, !className ? styles.modalDefault : className)} onClick={stopPropagation}>
                            <button className={btnClassName ? btnClassName : styles.closeBtn} onClick={this.disableModal} />
                            <Component {...rest} onCompletion={this.disableModal} />
                        </div>
                    </div>,
                    document.getElementById('modal-root')
                )}
            </>
        )
    }
}

export default Modal;