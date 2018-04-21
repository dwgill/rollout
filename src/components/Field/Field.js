import React from 'react';
import cls from 'classnames';
import styles from './styles.module.css';

const Field = ({ horizontal, ...props }) =>
  horizontal ? <HorizontalField {...props} /> : <TrueField {...props} />;

const TrueField = ({ children, label, labelSize, help }) => (
  <div className={styles.innerField}>
    {label && <Label size={labelSize}>{label}</Label>}
    <div className={styles.control}>{children}</div>
    {help && <p className={styles.helpText}>{help}</p>}
  </div>
);

const HorizontalField = ({ children, label, labelSize, labelSink, help }) => (
  <div className={styles.field}>
    {label && (
      <div
        className={cls(styles.fieldLabel, {
          [styles.labelSink]: labelSink,
        })}
      >
        <Label size={labelSize} sink={labelSink}>
          {label}
        </Label>
      </div>
    )}
    <div className={styles.fieldBody}>
      <div className={styles.innerField}>
        <div className={styles.control}>{children}</div>
        {help && <p className={styles.helpText}>{help}</p>}
      </div>
    </div>
  </div>
);

const Label = ({ children, size }) => (
  <label
    className={cls(styles.label, {
      [labelSizes[size]]: labelSizes[size],
      [styles.labelSizeNormal]: !labelSizes[size],
    })}
  >
    {children}
  </label>
);

const labelSizes = {
  small: styles.labelSizeSmall,
  normal: styles.labelSizeNormal,
  medium: styles.labelSizeMedium,
  large: styles.labelSizeLarge,
};

export default Field;
