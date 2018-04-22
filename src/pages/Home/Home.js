import React from 'react';
import RolloutGenerator from '../../components/RolloutGenerator';
import Credits from '../../components/Credits';
import styles from './styles.module.css';

const Icon = () => (
  <a className={styles.iconContainer}>
    <i className="fab fa-2x fa-github" />
  </a>
);

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
          <Icon />
        </div>
      </div>
    </section>
    <section className={styles.pageBody}>
      <div className={styles.container}>
        <RolloutGenerator />
      </div>
    </section>
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Credits />
      </div>
    </footer>
  </>
);

export default Home;
