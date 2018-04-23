import React from 'react';
import RolloutGenerator from '../../components/RolloutGenerator';
import Credits from '../../components/Credits';
import styles from './styles.module.css';

const GithubIcon = () => (
  <a
    className={styles.iconContainer}
    href="https://github.com/dwgill/rollout" 
    target="_blank"
    rel="external"
  >
    <i className="fab fa-2x fa-github" />
  </a>
);

/** @type React.SFC<{}> */
const Home = () => (
  <>
    <GithubIcon />
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
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Credits />
      </div>
    </footer>
  </>
);

export default Home;
