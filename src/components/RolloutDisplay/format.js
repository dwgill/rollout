import isEmpty from 'lodash/fp/isEmpty';
import sum from 'lodash/fp/sum';

export const formatDice = ({ constituents, discarded }) => {
  if (isEmpty(discarded)) {
    return `(${constituents.join(', ')})`;
  } else {
    return `(${constituents.join(', ')}) [${discarded.join(', ')}]`;
  }
};

export const formatAttr = ({ constituents }) => `${sum(constituents)}`;
