const noRequirements = state =>
  !state.requirements.length || state.requirements.length === 0;

export default noRequirements;
