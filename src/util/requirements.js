/**
 *
 * @param {'AT_LEAST' | 'AT_MOST' | 'EXACTLY'} numScoresLimit Is it a ceiling? A floor? on the number of scores
 * @param {number} numScores Number of scores to require
 * @param {'AT_LEAST' | 'AT_MOST' | 'EXACTLY'} scoreLimit Is it a ceiling? A floor? on the score itself
 * @param {number} score The value of the score to test: 3 <= score <= 18
 * @return {ScoreReq} An object representing this score requirement
 * @example scoreReq('AT_LEAST', 2, 'AT_LEAST', 15) => Colville classic requirement
 */
export const scoreReq = (numScoresLimit, numScores, scoreLimit, score) => ({
  kind: 'SCORE_REQ',
  numScoresLimit,
  numScores,
  scoreLimit,
  score,
});

/**
 *
 * @param {'AT_LEAST' | 'AT_MOST' | 'EXACTLY'} limit Is it a ceiling? A floor? etc.
 * @param {number} value The net attribute modifier
 * @return {NetModReq} An object representing this score requirement
 * @example netModReq("AT_LEAST", 2) => Colville neo requirement
 */
export const netModReq = (limit, value) => ({
  kind: 'NET_MOD_REQ',
  limit,
  value,
});

/**
 *
 * @param {'AT_LEAST' | 'AT_MOST' | 'EXACTLY'} limit Is it a ceiling? A floor? etc.
 * @param {number} value
 * @return {NetScoreReq} An object representing this score requirement
 * @example netScoreReq("AT_LEAST", 70) => Matt Mercer requirement
 */
export const netScoreReq = (limit, value) => ({
  kind: 'NET_SCORE_REQ',
  limit,
  value,
});

export const reqLimitValues = ['AT_LEAST', 'AT_MOST', 'EXACTLY'];

const fmtLimit = limit => limit.toLowerCase().replace('_', ' ');

const fmtReqs = {
  NET_MOD_REQ: ({ limit, value }) =>
    `all modifiers added together must be ${fmtLimit(limit)} ${value}`,
  NET_SCORE_REQ: ({ limit, value }) =>
    `all scores added together must be ${fmtLimit(limit)} ${value}`,
  SCORE_REQ: ({ numScoresLimit, numScores, scoreLimit, score }) =>
    `${fmtLimit(numScoresLimit)} ${numScores} ability scores must be ${fmtLimit(
      scoreLimit,
    )} ${score}`,
};

export const fmtReq = req => fmtReqs[req.kind](req);

/**
 * @typedef {object} ScoreReq
 * @prop {'SCORE_REQ'} kind
 * @prop {'AT_LEAST' | 'AT_MOST' | 'EXACTLY'} numScoresLimit
 * @prop {number} numScores
 * @prop {'AT_LEAST' | 'AT_MOST' | 'EXACTLY'} scoreLimit
 * @prop {number} score
 */

/**
 * @typedef {object} NetModReq
 * @prop {'NET_MOD_REQ'} kind
 * @prop {'AT_LEAST' | 'AT_MOST' | 'EXACTLY'} limit
 * @prop {number} value
 */

/**
 * @typedef {object} NetScoreReq
 * @prop {'NET_SCORE_REQ'} kind
 * @prop {'AT_LEAST' | 'AT_MOST' | 'EXACTLY'} limit
 * @prop {number} value
 */

/**
 * @typedef {ScoreReq | NetModReq | NetScoreReq} Req
 */
