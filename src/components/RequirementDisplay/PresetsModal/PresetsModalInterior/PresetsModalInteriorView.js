import React from 'react';
import styles from './styles.module.css';

const mercerLink =
  'https://www.sageadvice.eu/2018/02/28/how-did-you-choose-the-number-threshold-for-starting-stats-rolled-for-your-players/';
const colvilleClassicLink =
  'https://www.youtube.com/watch?v=0K9mKpAMREU&feature=youtu.be&t=8m53s';
const colvilleLink = '#';

const stopPropagation = event => {
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
};

const A = ({ link, children }) => (
  <a
    className={styles.link}
    href={link}
    onClick={stopPropagation}
    rel="external"
    target="_blank"
  >
    {children}
  </a>
);

const PresetsModalInteriorView = ({
  onSetColville: handleSetColville,
  onSetColvilleClassic: handleSetColvilleClassic,
  onSetMercer: handleSetMercer,
  onSetMercerPlus: handleSetMercerPlus,
}) => (
  <>
    <h2 className={styles.title}>Preset Requirements</h2>
    <div className={styles.item} onClick={handleSetColville} role="button">
      <h3 className={styles.itemTitle}>The Colville</h3>
      <p className={styles.itemBody}>
        A method described by Matt Colville in his{' '}
        <A link={colvilleLink}>Running the Game</A> series. Roll the standard
        4d6, drop 1, six times in order, but start over again if the all the
        modifiers add up to less than +2.
      </p>
    </div>
    <div
      className={styles.item}
      onClick={handleSetColvilleClassic}
      role="button"
    >
      <h3 className={styles.itemTitle}>The Colville Classic</h3>
      <p className={styles.itemBody}>
        The original approach{' '}
        <A link={colvilleClassicLink}>advocated by Matt Colville</A> when
        introducing players to Dungeons & Dragons. Roll 4d6, drop 1, in order,
        but discard the rollout if there aren't at least two scores 15 or
        higher.
      </p>
    </div>
    <div className={styles.item} onClick={handleSetMercer} role="button">
      <h3 className={styles.itemTitle}>The Mercer</h3>
      <p className={styles.itemBody}>
        An approach <A link={mercerLink}>used by Matt Mercer</A> of Critical
        Role fame. Roll your stats using the standard 4d6 drop 1, but roll again
        if the attributes don't add up to 70 or more.
      </p>
    </div>
    <div className={styles.item} onClick={handleSetMercerPlus} role="button">
      <h3 className={styles.itemTitle}>The Mercer+</h3>
      <p className={styles.itemBody}>
        <A link={mercerLink}>
          Same approach by Matt Mercer, but with a higher threshold.
        </A>{' '}
        Roll stats as usual, but start again if the scores add up to less than
        75.
      </p>
    </div>
  </>
);

export default PresetsModalInteriorView;
