import React from 'react';
import { formatAttr, formatDice } from './format';
import cls from 'classnames';
import styles from './styles.module.css';
import random from 'lodash/fp/random';

const attributeOrder = [
  'Strength',
  'Dexterity',
  'Constitution',
  'Intelligence',
  'Wisdom',
  'Charisma',
];

const generateStyle = () => ({
  [`padding${['Left', 'Right'][random(0, 1)]}`]: `${random(0.0, 1.1)}rem`,
  transform: `rotate(${random(-2, 2)}deg) scale(${random(0.9, 1.05)})`,
});

const AttributeRows = ({
  attributesAreStale,
  attributes,
  displayDice,
  showAtributeNames,
}) => {
  const classNames = cls(
    styles.resultText,
    styles.multipleRows,
    attributesAreStale ? styles.stale : styles.notStale,
  );

  return attributes.map((attr, index) => {
    const attrName = attributeOrder[index];
    const formattedAttr = formatAttr(attr);
    const formattedDice = formatDice(attr);
    return (
      <p className={classNames} key={attrName} style={generateStyle()}>
        {!showAtributeNames ? '' : `${attrName} `}
        {formattedAttr}
        {!displayDice ? '' : ` ${formattedDice}`}
      </p>
    );
  });
};

export default AttributeRows;
