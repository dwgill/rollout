import React from 'react';
import RollTypeSelector from '../RollTypeSelector';
import styles from './styles.module.css';
import DisplaySettings from '../DisplaySettings';

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
                <p>See the results.</p>
            </div>
        </div>
    </div>
);

export default AttributeGenerator;