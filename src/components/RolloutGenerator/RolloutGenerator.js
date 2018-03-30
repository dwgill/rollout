import React from 'react';
import RollTypeSelector from '../RollTypeSelector';
import styles from './styles.module.css';
import DisplaySettings from '../DisplaySettings';
import RolloutDisplay from '../RolloutDisplay';

/** @type React.SFC<{}> */
const AttributeGenerator = () => (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className={styles.child}>
                <RollTypeSelector />
            </div>
            <div className={styles.child}>
                <p>Guarantees</p>
            </div>
            <div className={styles.child}>
                <DisplaySettings />
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.rolloutResult}>
                <RolloutDisplay />
            </div>
        </div>
    </div>
);

export default AttributeGenerator;