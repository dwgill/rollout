import combineEvents from '@redux-beacon/combine-events';
import GoogleAnalyticsGtag, {
  trackEvent,
} from '@redux-beacon/google-analytics-gtag';
import flow from 'lodash/fp/flow';
import join from 'lodash/fp/join';
import map from 'lodash/fp/map';
import property from 'lodash/fp/property';
import sortBy from 'lodash/fp/sortBy';
import sum from 'lodash/fp/sum';
import { createMiddleware } from 'redux-beacon';
import {
  ADD_REQUIREMENT,
  DO_ROLLOUT,
  FAIL_ROLLOUT,
  PRESET_COLVILLE,
  PRESET_COLVILLE_CLASSIC,
  PRESET_MERCER,
  PRESET_MERCER_PLUS,
  REMOVE_REQUIREMENT,
  REPLACE_REQUIREMENTS,
  SET_ATTRIBUTE_ROLL_TYPE,
  SET_DISPLAY_DICE,
  SET_DISPLAY_MODS,
  SET_FORCE_STALE,
  SET_ROLL_IN_ORDER,
} from './actions/types';
import {
  NET_MOD_CONSTRAINT,
  NET_SCORE_CONSTRAINT,
  SCORE_CONSTRAINT,
} from './rollout-core/ConstraintKinds';

const categories = {
  display: 'Display',
  requirements: 'Requirements',
  rollType: 'Roll Type',
  rollout: 'Rollout',
  presets: 'Presets',
};

function fmtLimitValue(limitStr, value) {
  let fmtLimitStr;
  if (limitStr === 'AT_LEAST') {
    fmtLimitStr = 'atLeast';
  } else if (limitStr === 'AT_MOST') {
    fmtLimitStr = 'atMost';
  } else {
    fmtLimitStr = 'exactly';
  }

  return `${fmtLimitStr}(${value})`;
}

function fmtMod(num) {
  if (num >= 0) {
    return `+${num}`;
  } else {
    return `${num}`;
  }
}

const reqfmters = {
  [NET_MOD_CONSTRAINT]: ({ limit, value }) =>
    `netMod_${fmtLimitValue(limit, fmtMod(value))}`,
  [NET_SCORE_CONSTRAINT]: ({ limit, value }) =>
    `netScore_${fmtLimitValue(limit, value)}`,
  [SCORE_CONSTRAINT]: ({ numScoresLimit, numScores, scoreLimit, score }) => {
    const fmtNumScoresLimit = fmtLimitValue(numScoresLimit, numScores);
    const fmtScoresLimit = fmtLimitValue(scoreLimit, score);
    return `scores_${fmtNumScoresLimit}${fmtScoresLimit}`;
  },
};

const fmtReq = req => reqfmters[req.kind](req);

const fmtReqs = flow(
  map(fmtReq),
  sortBy(x => x),
  join(','),
  reqsStr => reqsStr || 'none',
);

const fmtRollout = flow(
  property('newRollout'),
  map('constituents'),
  map(sum),
  join(','),
);

const eventsMap = {
  [SET_ATTRIBUTE_ROLL_TYPE]: trackEvent(({ type, payload }) => ({
    category: categories.rollType,
    action: type,
    // value: null,
    label: payload,
  })),
  [SET_ROLL_IN_ORDER]: trackEvent(({ type, payload }) => ({
    category: categories.display,
    action: type,
    // value: null,
    label: payload,
  })),
  [SET_DISPLAY_MODS]: trackEvent(({ type, payload }) => ({
    category: categories.display,
    action: type,
    // value: null,
    label: payload,
  })),
  [SET_FORCE_STALE]: trackEvent(({ type, payload }) => ({
    category: categories.display,
    action: type,
    // value: null,
    label: payload,
  })),
  [SET_DISPLAY_DICE]: trackEvent(({ type, payload }) => ({
    category: categories.display,
    action: type,
    // value: null,
    label: payload,
  })),
  [DO_ROLLOUT]: combineEvents(
    trackEvent(({ type, payload }) => ({
      category: categories.rollout,
      action: `${type}_RESULTS`,
      // value: null,
      label: fmtRollout(payload),
    })),
    trackEvent(({ type }, prevState) => ({
      category: categories.rollout,
      action: `${type}_REQS`,
      // value: null,
      label: fmtReqs(prevState.requirements),
    })),
  ),
  [FAIL_ROLLOUT]: trackEvent(({ type }, prevState) => ({
    category: categories.rollout,
    action: type,
    // value: null,
    label: fmtReqs(prevState.requirements),
  })),
  [ADD_REQUIREMENT]: trackEvent(({ type, payload }) => ({
    category: categories.requirements,
    action: type,
    // value: null,
    label: fmtReq(payload),
  })),
  [REPLACE_REQUIREMENTS]: trackEvent(({ type, payload }) => ({
    category: categories.requirements,
    action: type,
    // value: null,
    label: fmtReqs(payload),
  })),
  [REMOVE_REQUIREMENT]: trackEvent(({ type, payload }, prevState) => ({
    category: categories.requirements,
    action: type,
    // value: null,
    label: fmtReq(prevState.requirements[payload]),
  })),
  [PRESET_COLVILLE]: trackEvent(({ type }) => ({
    category: categories.presets,
    action: type,
    // value: null,
    // label: null,
  })),
  [PRESET_COLVILLE_CLASSIC]: trackEvent(({ type }) => ({
    category: categories.presets,
    action: type,
    // value: null,
    // label: null,
  })),
  [PRESET_MERCER]: trackEvent(({ type }) => ({
    category: categories.presets,
    action: type,
    // value: null,
    // label: null,
  })),
  [PRESET_MERCER_PLUS]: trackEvent(({ type }) => ({
    category: categories.presets,
    action: type,
    // value: null,
    // label: null,
  })),
};

// This next value is supplied at compile time via env variable through the create-react-app buildpack
const analyticsID = process.env.REACT_APP_ANALYTICS_ID;
const ga = GoogleAnalyticsGtag(analyticsID);

const analyticsReduxMiddleware = createMiddleware(eventsMap, ga);

export default analyticsReduxMiddleware;
