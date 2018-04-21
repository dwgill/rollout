import React from 'react';
import cls from 'classnames';
import FailedRolloutDisplay from './FailedRolloutDisplay';
import AttributeRow from './AttributeRow';
import AttributeRows from './AttributeRows';
import styles from './styles.module.css';

const fmtNumRolls = numRolls =>
  numRolls === 1 ? '1 roll' : `${numRolls} rolls`;

/**
 * @typedef RolloutDisplayViewProps
 * @prop {boolean} attributesAreStale
 * @prop {rollout[]} attributes
 * @prop {function} onRollout
 * @prop {boolean} showAtributeNames
 * @prop {boolean} displayDice
 * @prop {number} numRolls
 * @prop {number} numRequirements
 * @prop {boolean} rolloutFailed
 */

/** @type React.SFC<RolloutDisplayViewProps> */
const RolloutDisplayView = ({
  attributesAreStale,
  requireStaleAttsToRoll,
  attributes,
  onRollout: handleRollout,
  displayDice,
  showAtributeNames,
  numRolls,
  rolloutFailed,
  numRequirements,
}) => (
  <>
    <div className={styles.resultsContainer}>
      {rolloutFailed ? (
        <FailedRolloutDisplay numRequirements={numRequirements} />
      ) : attributes.length === 0 ? null : showAtributeNames || displayDice ? (
        <AttributeRows
          attributesAreStale={attributesAreStale}
          attributes={attributes}
          displayDice={displayDice}
          showAtributeNames={showAtributeNames}
        />
      ) : (
        <AttributeRow
          attributes={attributes}
          attributesAreStale={attributesAreStale}
        />
      )}
    </div>
    <div className={styles.rolloutButtonContainer}>
      <p
        className={cls(styles.rollCount, {
          [styles.stale]: attributesAreStale,
        })}
      >
        {fmtNumRolls(numRolls)}
      </p>
      <button
        className={styles.button}
        onClick={handleRollout}
        disabled={requireStaleAttsToRoll && !attributesAreStale}
      >
        Rollout
      </button>
    </div>
  </>
);

export default RolloutDisplayView;
