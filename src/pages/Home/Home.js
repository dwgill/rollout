import React from 'react';
import RolloutGenerator from '../../components/RolloutGenerator';
import styles from './styles.module.css';

/** @type React.SFC<{}> */
const Home = () => (
  <>
    <section className={styles.header}>
      <div className={styles.headerBody}>
        <div className={styles.container}>
          <h1 className={styles.title}>Rollout</h1>
          <h5 className={styles.subtitle}>
            A Dungeons & Dragons Attribute Generator
          </h5>
        </div>
      </div>
    </section>
    <section className={styles.pageBody}>
      <div className={styles.container}>
        <RolloutGenerator />
      </div>
    </section>
  </>
);

export default Home;
