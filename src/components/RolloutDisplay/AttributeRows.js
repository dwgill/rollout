import React from 'react';
import { formatAttr, formatDice } from './format'
import cls from 'classnames';
import styles from './styles.module.css';

const attributeOrder = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
];

const generateStyle = () => Math.random() >= 0.5 ? ({
    paddingRight: `${Math.random()}rem`,
}) : ({
    paddingLeft: `${Math.random()}rem`,
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
        attributesAreStale ? styles.stale : styles.notStale
    );

    return attributes.map((attr, index) => {
        const attrName = attributeOrder[index];
        const formattedAttr = formatAttr(attr);
        const formattedDice = formatDice(attr);
        return (
            <p
                className={classNames}
                key={attrName}
                style={generateStyle()}
            >
                {!showAtributeNames ? '' : `${attrName} `}
                {formattedAttr}
                {!displayDice ? '' : ` ${formattedDice}`}
            </p>
        )
    })
} 

export default AttributeRows;