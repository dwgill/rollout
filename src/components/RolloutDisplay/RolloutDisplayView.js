import React from 'react';
import styles from './styles.module.css';
import AttributeRow from './AttributeRow';
import AttributeRows from './AttributeRows';

/**
 * @typedef RolloutDisplayViewProps
 * @prop {boolean} attributesAreStale
 * @prop {rollout[]} attributes
 * @prop {function} onRollout
 * @prop {boolean} showAtributeNames
 * @prop {boolean} displayDice
 */

/** @type React.SFC<RolloutDisplayViewProps> */
const RolloutDisplayView = ({
    attributesAreStale,
    attributes,
    onRollout: handleRollout,
    displayDice,
    showAtributeNames,
}) => (
    <>
        <div className={styles.resultsContainer}>
            {showAtributeNames || displayDice
                ? (
                    <AttributeRows 
                        attributesAreStale={attributesAreStale}
                        attributes={attributes}
                        displayDice={displayDice}
                        showAtributeNames={showAtributeNames}
                    />
                )
                : (
                    <AttributeRow
                        attributes={attributes}
                        attributesAreStale={attributesAreStale}
                    />
                )
            }
        </div>
        <div className={styles.rolloutButtonContainer}>
            <button
                className={styles.button}
                onClick={handleRollout}
                // disabled={!attributesAreStale}
            >
                Rollout
            </button>
        </div>
    </>
);

export default RolloutDisplayView;
