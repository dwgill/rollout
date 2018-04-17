import React from 'react';
import map from 'lodash/fp/map';
import cls from 'classnames';
import styles from './styles.module.css';
import { Title } from 'reactbulma';

const doNothing = () => {};

/**
 * @typedef {object} Option
 * @prop {string|number} key
 * @prop {string} title
 * @prop {string} [desc='']
 */

/**
 * @typedef {object} DropdownProps
 * @prop {Option[]} options
 * @prop {string|number} selected
 * @prop {func} onChange
 * @prop {string} label
 * @prop {string} dropdownID
 * @prop {object} [style={}]
 * @prop {string} [className='']
 * @prop {object} [menuStyle={}]
 * @prop {string} [menuClassName='']
 * @prop {object} [buttonStyle={}]
 * @prop {string} [buttonClassName='']
 */

/**
 * @typedef {object} DropdownState
 * @prop {boolean} expanded
 * @prop {number} uniqID
 */

/** @type React.Component<DropdownProps, DropdownState> */
class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      uniqID:
        this.props.dropdownID ||
        'dropdown-' + Math.floor(Math.random() * 1000000),
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  toggleExpanded() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  handleChange(newKey) {
    const { onChange: trueHandleChange, selected } = this.props;
    this.setState({
      expanded: false,
    });

    if (newKey !== selected && trueHandleChange) {
      trueHandleChange(newKey);
    }
  }

  renderOption({ key, title, desc }) {
    const { selected } = this.props;
    return (
      <div
        key={key}
        onClickCapture={() => this.handleChange(key)}
        className={cls(styles.menuItem, {
          [styles.menuItemActive]: selected === key,
        })}
      >
        <Title is="6" className={styles.optionTitle}>
          {title}
        </Title>
        <p>{desc}</p>
      </div>
    );
  }

  render() {
    const { expanded, uniqID } = this.state;
    const {
      options,
      selected,
      label,
      onChange: handleChange,
      className,
      style,
      menuClassName,
      menuStyle,
      buttonClassName,
      buttonStyle,
    } = this.props;

    return (
      <div
        className={cls(styles.dropdown, {
          [className]: !!className,
          [styles.active]: expanded,
        })}
      >
        {/* Trigger */}
        <div className={styles.dropdownTrigger}>
          <button
            className={cls(styles.button, buttonClassName)}
            style={buttonStyle}
            aria-haspopup="true"
            aria-controls={uniqID}
            onClick={this.toggleExpanded}
          >
            <span>{label}</span>
            <span className={styles.iconContainer}>
              <i className={styles.icon} aria-hidden="true" />
            </span>
          </button>
        </div>
        {/* Options */}
        <div className={styles.menu} id={uniqID} role="menu">
          <div
            className={cls(styles.menuContent, menuClassName)}
            style={menuStyle}
          >
            {map(this.renderOption)(options)}
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
