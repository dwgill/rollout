import flow from 'lodash/fp/flow';
import sum from 'lodash/fp/sum';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';
import { calcMod } from './modifiers';
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

const nbs = String.fromCharCode(160); // non-breaking space

const scoreLimitTexts = {
  AT_MOST: `or${nbs}less`,
  AT_LEAST: `or${nbs}more`,
  EXACTLY: 'exactly',
};

const fmtReqs = {
  NET_MOD_REQ({ limit, value }) {
    return `sum of all mods equal ${fmtLimit(limit)}${nbs}${value}`;
  },

  NET_SCORE_REQ({ limit, value }) {
    return `sum of all scores equal ${fmtLimit(limit)}${nbs}${value}`;
  },

  SCORE_REQ({ numScoresLimit, numScores, scoreLimit, score }) {
    const scoreLimitTxt = scoreLimitTexts[scoreLimit];
    const numScoresTxt =
      numScores === 1 ? `1${nbs}score` : `${numScores}${nbs}scores`;
    return `${fmtLimit(
      numScoresLimit,
    )} ${numScoresTxt} ${score} ${scoreLimitTxt}`;
  },
};

export const fmtReq = req => fmtReqs[req.kind](req);

const getScores = flow(map('constituents'), map(sum));
const calcNetMod = flow(getScores, map(calcMod), sum);
const calcNetScore = flow(getScores, sum);

const reqFuncs = {
  /**
   * @param {NetModReq} param0
   * @returns a func which evaluations whether a rollout meets the criteria
   */
  NET_MOD_REQ({ limit, value }) {
    if (limit === 'AT_LEAST') {
      return rollout => calcNetMod(rollout) >= value;
    } else if (limit === 'AT_MOST') {
      return rollout => calcNetMod(rollout) <= value;
    } else {
      return rollout => calcNetMod(rollout) === value;
    }
  },

  /**
   * @param {NetScoreReq} netScoreReq
   * @returns a func which evaluations whether a rollout meets the criteria
   */
  NET_SCORE_REQ({ limit, value }) {
    if (limit === 'AT_LEAST') {
      return rollout => calcNetScore(rollout) >= value;
    } else if (limit === 'AT_MOST') {
      return rollout => calcNetScore(rollout) <= value;
    } else {
      return rollout => calcNetScore(rollout) === value;
    }
  },

  /**
   * @param {ScoreReq} scoreRequirement
   * @returns a function which evaluates whether a rollout object meets the criteria specified
   */
  SCORE_REQ({ numScoresLimit, numScores, scoreLimit, score }) {
    let filterRelevantScores;
    if (scoreLimit === 'AT_LEAST') {
      filterRelevantScores = filter(attrVal => attrVal >= score);
    } else if (scoreLimit === 'AT_MOST') {
      filterRelevantScores = filter(attrVal => attrVal <= score);
    } else {
      filterRelevantScores = filter(attrVal => attrVal === score);
    }

    if (numScoresLimit === 'AT_LEAST') {
      return flow(
        getScores,
        filterRelevantScores,
        scores => scores.length >= numScores,
      );
    } else if (numScoresLimit === 'AT_MOST') {
      return flow(
        getScores,
        filterRelevantScores,
        scores => scores.length <= numScores,
      );
    } else {
      return flow(
        getScores,
        filterRelevantScores,
        scores => scores.length === numScores,
      );
    }
  },
};

export const convertReqToPredicate = req => reqFuncs[req.kind](req);

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
