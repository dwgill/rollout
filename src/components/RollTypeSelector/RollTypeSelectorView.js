import React from 'react';
import keys from 'lodash/fp/keys';
import SectionHeading from '../SectionHeading';
import SectionSubHeading from '../SectionSubHeading';
import styles from './styles.module.css';
import { types as rollTypes } from '../../util/attributeRolls';
import {
  augmentedDescription,
  classicDescription,
  standardDescription,
} from './descriptions';

const options = keys(rollTypes);

const formatOption = (/** @type {string} */ opt) => {
  return (
    opt.substring(0, 1).toLocaleUpperCase() +
    opt.substring(1).toLocaleLowerCase()
  );
};

const helpText = {
  STANDARD: standardDescription,
  CLASSIC: classicDescription,
  AUGMENTED: augmentedDescription,
};

/**
 * @typedef RollTypeSelectorViewProps
 * @prop {string} selectedType
 * @prop {function} onSelectType
 */

/** @type React.SFC<RollTypeSelectorViewProps> */
const RollTypeSelectorView = ({
  selectedType,
  onSelectType: handleSelectType,
}) => (
  <>
    <SectionHeading>Attribute Roll Type</SectionHeading>
    <SectionSubHeading>
      What dice should be rolled to generate a single ability score?
    </SectionSubHeading>
    <div className={styles.selectWrapper}>
      <select
        value={selectedType}
        onChange={handleSelectType}
        className={styles.selectElement}
      >
        {options.map(opt => (
          <option value={opt} key={opt}>
            {formatOption(opt || '')}
          </option>
        ))}
      </select>
    </div>
    {helpText[selectedType]}
  </>
);

export default RollTypeSelectorView;
