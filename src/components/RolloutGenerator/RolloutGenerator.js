import React from 'react';
import RollTypeSelector from '../RollTypeSelector';
import styles from './styles.module.css';

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
                <p>Roll in order, show constituent rolls, etc.</p>
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.child}>
                <p>See the results.</p>
            </div>
        </div>
    </div>
);

export default AttributeGenerator;