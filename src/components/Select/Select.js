import React from 'react';
import styles from './styles.module.css';

const Select = ({ children, className, ...props }) => (
  <div className={styles.selectContainer}>
    <select {...props} className={className || ''}>
      {children}
    </select>
  </div>
);

export default Select;
