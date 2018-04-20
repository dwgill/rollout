import React from 'react';
import styles from './styles.module.css';

const DeleteButton = ({ onDelete }) => (
  <button className={styles.delBtn} onClick={onDelete}>
    <span className={styles.delBtnIconWrapper}>
      <i className="fas fa-times" />
    </span>
  </button>
);

/** @type React.PureComponent<RequirementProps, {}> */
class Requirement extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    const { id, onDelete: trueHandleDelete } = this.props;
    if (trueHandleDelete) {
      trueHandleDelete(id);
    }
  }

  render() {
    const { text } = this.props;
    return (
      <li className={styles.requirement}>
        <DeleteButton onDelete={this.handleDelete} />
        {text}
      </li>
    );
  }
}

/**
 * @typedef {object} RequirementProps
 * @prop {string} text
 * @prop {number} id
 * @prop {function} onDelete
 */

export default Requirement;
