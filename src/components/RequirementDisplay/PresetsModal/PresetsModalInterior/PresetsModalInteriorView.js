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

const Button = ({ title, children, onClick }) => (
  <li className={styles.button} onClick={onClick} role="button">
    <h3 className={styles.buttonTitle}>{title}</h3>
    <p className={styles.buttonBody}>{children}</p>
  </li>
);

const PresetsModalInteriorView = ({
  onSetColville: handleSetColville,
  onSetColvilleClassic: handleSetColvilleClassic,
  onSetMercer: handleSetMercer,
  onSetMercerPlus: handleSetMercerPlus,
}) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Preset Requirements</h2>
    <ul className={styles.buttons}>
      <Button title="The Colville" onClick={handleSetColville}>
        A method described by Matt Colville in his{' '}
        <A link={colvilleLink}>Running the Game</A> series. Roll the standard
        4d6 and drop the lowest die, six times in order, but start over again if
        the all the modifiers add up to less than +2.
      </Button>
      <Button title="The Colville Classic" onClick={handleSetColvilleClassic}>
        The original approach{' '}
        <A link={colvilleClassicLink}>advocated by Matt Colville</A> when
        introducing players to Dungeons & Dragons. As standard, roll 4d6 and
        drop the lowest die for each attribute, but discard the rollout if there
        aren't at least two scores 15 or higher.
      </Button>
      <Button title="The Mercer" onClick={handleSetMercer}>
        An approach <A link={mercerLink}>used by Matt Mercer</A> of Critical
        Role fame. Roll your stats using the standard method, but roll again if
        the attributes don't add up to 70 or more.
      </Button>
      <Button title="The Mercer+" onClick={handleSetMercerPlus}>
        <A link={mercerLink}>
          The same approach by Matt Mercer, but with a higher threshold.
        </A>{' '}
        Roll stats as usual, but start again if the scores add up to less than
        75.
      </Button>
    </ul>
  </div>
);

export default PresetsModalInteriorView;
