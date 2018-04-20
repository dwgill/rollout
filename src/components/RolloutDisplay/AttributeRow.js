import React from 'react';
import cls from 'classnames';
import random from 'lodash/fp/random';
import { formatAttr } from './format';
import styles from './styles.module.css';

const genStyle = () => ({
  transform: `scale(${random(0.95, 1.05)}) rotate(${random(-0.5, 0.5)}deg)`,
});

const AttributeRow = ({ attributesAreStale, attributes }) => (
  <p
    style={genStyle()}
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
