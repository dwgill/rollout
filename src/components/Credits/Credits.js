import React from 'react';
import styles from './styles.module.css';

const A = ({ link, children }) => (
  <a className={styles.link} href={link}>
    {children}
  </a>
);

const Credits = () => (
  <ul className={styles.list}>
    <li className={styles.credit}>
      <A link="https://bulma.io/">Bulma CSS framework</A> by Jeremy Thomas.
    </li>
    <li className={styles.credit}>
      Perspective dice 6 icon by <A link="http://delapouite.com/">Delapouite</A>{' '}
      under <A link="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</A>.
    </li>
    <li className={styles.credit}>
      <A link="https://www.toptal.com/designers/subtlepatterns/lined-paper-2/">
        Lined paper
      </A>{' '}
      background pattern from{' '}
      <A link="https://www.toptal.com/designers/subtlepatterns">
        Toptal Subtle Patterns
      </A>.
    </li>
    <li className={styles.credit}>
      Cubes icon by <A link="http://lorcblog.blogspot.com/">Lorc</A> under{' '}
      <A link="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</A>
    </li>
  </ul>
);

export default Credits;
