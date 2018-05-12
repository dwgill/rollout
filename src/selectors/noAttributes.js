const noAttributes = state => {
  const { rollout: { attributtes } = {} } = state;
  return !attributtes || !attributtes.length || attributtes.length === 0;
};

export default noAttributes;
