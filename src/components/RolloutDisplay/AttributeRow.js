import React from 'react';
import cls from 'classnames';
import { formatAttr } from './format';
import styles from './styles.module.css';

const AttributeRow = ({ attributesAreStale, attributes }) => (
  <p
    className={cls(
      styles.resultText,
      styles.singleRow,
      attributesAreStale ? styles.stale : styles.notStale,
    )}
  >
    {attributes.map(formatAttr).join(', ')}
  </p>
);

export default AttributeRow;
