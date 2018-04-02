import React from 'react';
import ReactDOM from 'react-dom';
import cls from 'classnames';
import styles from './styles.module.css';

function stopPropagation(/** @type React.SyntheticEvent */ event) {
  event.stopPropagation();
}

/**
 * @typedef ModalProps
 * @prop {React.ComponentType} interior
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
  };

  constructor(props) {
    super(props);

    this.state = {
      enabled: false,
    };

    this.enableModal = this.enableModal.bind(this);
    this.disableModal = this.disableModal.bind(this);
  }

  enableModal() {
    this.setState({ enabled: true });
  }

  disableModal() {
    this.setState({ enabled: false });
  }

  render() {
    const {
      interior: Interior,
      className,
      btnClassName,
      btnLabel,
      ...rest
    } = this.props;
    const { enabled } = this.state;
    return (
      <>
        <button
          className={!btnClassName ? styles.button : btnClassName}
          onClick={this.enableModal}
        >
          {btnLabel}
        </button>
        {enabled &&
          ReactDOM.createPortal(
            <div className={styles.modalShade} onClick={this.disableModal}>
              <div
                className={cls(
                  styles.modalCommon,
                  !className ? styles.modalDefault : className,
                )}
                onClick={stopPropagation}
              >
                <button
                  className={styles.closeBtn}
                  onClick={this.disableModal}
                />
                <Interior {...rest} onCompletion={this.disableModal} />
              </div>
            </div>,
            document.getElementById('modal-root'),
          )}
      </>
    );
  }
}

export default Modal;
