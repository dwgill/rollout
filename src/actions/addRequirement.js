import { ADD_REQUIREMENT } from './types';
import {
  NetModConstraint,
  NetScoreConstraint,
  ScoreConstraint,
  AT_LEAST,
  AT_MOST,
  EXACTLY,
} from '../rollout-core/ConstraintKinds';
import { Exception } from 'handlebars';

const addRequirement = newReq => ({
  type: ADD_REQUIREMENT,
  payload: newReq,
});

export const addNetModRequirement = ({ limit, value }) => {
  const requirement = NetModConstraint(parseLimitStr(limit), Number(value));
  return addRequirement(requirement);
};

export const addNetScoreRequirement = ({ limit, value }) => {
  const requirement = NetScoreConstraint(parseLimitStr(limit), Number(value));
  return addRequirement(requirement);
};

export const addScoreRequirement = ({
  numScores,
  score,
  scoreLimit,
  numScoresLimit,
}) => {
  const requirement = ScoreConstraint(
    parseLimitStr(numScoresLimit),
    Number(numScores),
    parseLimitStr(scoreLimit),
    Number(score),
  );
  return addRequirement(requirement);
};

/**
 * @param {string} limitStr
 */
function parseLimitStr(limitStr) {
  const adjustedLimitString = limitStr
    .toUpperCase()
    .trim()
    .replace(/ /g, '_');
  if (adjustedLimitString === AT_LEAST) {
    return AT_LEAST;
  } else if (adjustedLimitString === AT_MOST) {
    return AT_MOST;
  } else if (adjustedLimitString === EXACTLY) {
    return EXACTLY;
  } else {
    throw new Exception(`invalid limit string: ${limitStr}`);
  }
}

export default addRequirement;
