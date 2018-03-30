import React from 'react';
import styles from './styles.module.css';

// const RolloutDisplayView = () => <p className={styles.resultText}>RolloutDisplayView!</p>;
const RolloutDisplayView = () => (
    <div className={styles.results}>
        <p className={styles.resultText}>Strength 8</p>
        <p className={styles.resultText}>Dexterity 10</p>
        <p className={styles.resultText}>Constitution 12</p>
        <p className={styles.resultText}>Intelligence 14</p>
        <p className={styles.resultText}>Wisdom 16</p>
        <p className={styles.resultText}>Charisma 18</p>
    </div>
)

export default RolloutDisplayView;
