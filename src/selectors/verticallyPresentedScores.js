import { displayDice, displayMods, rollInOrder } from '.';

const verticallyPresentedScores = state => {
  return (
    rollInOrder(state) || displayDice(state) || displayMods(state) || false
  );
};

export default verticallyPresentedScores;
