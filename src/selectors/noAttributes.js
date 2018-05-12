const noAttributes = state => {
  const { rollout } = state;
  const { attributes } = rollout; 
  return !attributes || !attributes.length || attributes.length === 0;
};

export default noAttributes;
