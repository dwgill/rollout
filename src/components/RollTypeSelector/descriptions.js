import React from 'react';
import styles from './styles.module.css';

const basic5eRules = 'https://dnd.wizards.com/articles/features/basicrules';

const ogBasicRules =
  'https://www.dmsguild.com/product/110274/DD-Basic-Set-Rulebook-B-X-ed-Basic';

const adndRules = 'http://www.dmsguild.com/product/17003/Players-Handbook-1e';

const someGuy =
  'https://www.reddit.com/r/mattcolville/comments/75ixng/average_ability_scores_from_multiple_methods/do6kk7g/';

export const standardDescription = (
  <p className={styles.helpText}>
    Roll four six-sided dice, and take the highest three. This is the method
    described for generating ability scores randomly in the Dungeons & Dragons
    Fifth Edition Player's Handbook and{' '}
    <a className={styles.link} href={basic5eRules}>
      Basic Rules.
    </a>
  </p>
);

export const classicDescription = (
  <p className={styles.helpText}>
    Roll three six-sided dice. That's it. This is the method used in classic
    editions of D&D like{' '}
    <a className={styles.link} href={ogBasicRules}>
      Basic
    </a>{' '}
    and{' '}
    <a className={styles.link} href={adndRules}>
      Advanced
    </a>{' '}
    Dungeons & Dragons and other old-school inspired games.
  </p>
);

export const augmentedDescription = (
  <p className={styles.helpText}>
    Roll two six-sided dice, and add six. A pretty rare method. I've only heard
    of someone doing this once, from{' '}
    <a className={styles.link} href={someGuy}>
      some random Redditor.
    </a>
  </p>
);
