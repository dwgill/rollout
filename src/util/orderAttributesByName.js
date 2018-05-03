const convertRolloutToScores = (rollout, verbose = false) => {
  const [str, dex, con, int, wis, cha] = rollout;
  if (verbose) {
    return {
      Strength: str,
      Dexterity: dex,
      Constitution: con,
      Intelligence: int,
      Wisdom: wis,
      Charisma: cha,
    };
  } else {
    return {
      str,
      dex,
      con,
      int,
      wis,
      cha,
    };
  }
};

export default convertRolloutToScores;
