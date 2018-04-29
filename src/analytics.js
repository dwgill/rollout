import { createMiddleware } from 'redux-beacon';
import GoogleAnalyticsGtag, {
  trackEvent,
} from '@redux-beacon/google-analytics-gtag';
import combineEvents from '@redux-beacon/combine-events';
import map from 'lodash/fp/map';
import flow from 'lodash/fp/flow';
import sum from 'lodash/fp/sum';
import property from 'lodash/fp/property';
import join from 'lodash/fp/join';
import sortBy from 'lodash/fp/sortBy';
import {
  netModReqKind,
  scoreReqKind,
  netScoreReqKind,
} from './util/requirements';
import {
  SET_ATTRIBUTE_ROLL_TYPE,
  SET_ROLL_IN_ORDER,
  SET_FORCE_STALE,
  SET_DISPLAY_DICE,
  DO_ROLLOUT,
  FAIL_ROLLOUT,
  ADD_REQUIREMENT,
  REPLACE_REQUIREMENTS,
  REMOVE_REQUIREMENT,
  PRESET_COLVILLE,
  PRESET_COLVILLE_CLASSIC,
  PRESET_MERCER,
  PRESET_MERCER_PLUS,
} from './actions/types';

const categories = {
  display: 'Display',
  requirements: 'Requirements',
  rollType: 'Roll Type',
  rollout: 'Rollout',
  presets: 'Presets',
};

function fmtLimit(limitStr) {
  return limitStr === 'AT_LEAST' ? '<=' : limitStr === 'AT_MOST' ? '>=' : '==';
}

function fmtMod(num) {
  if (num >= 0) {
    return `+${num}`;
  } else {
    return `${num}`;
  }
}

const reqfmters = {
  [netModReqKind]: ({ limit, value }) =>
    `netMod${fmtLimit(limit)}${fmtMod(value)}`,
  [netScoreReqKind]: ({ limit, value }) => `netScore${fmtLimit(limit)}${value}`,
  [scoreReqKind]: ({ numScoresLimit, numScores, scoreLimit, score }) => {
    const limitNum = fmtLimit(numScoresLimit);
    const limitScore = fmtLimit(scoreLimit);
    const fmtedScore = fmtMod(score);
    return `scoreReq${limitNum}${numScores}${limitScore}${fmtedScore}`;
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

const analyticsID = process.env.REACT_APP_ANALYTICS_ID;
const ga = GoogleAnalyticsGtag(analyticsID);

const analyticsReduxMiddleware = createMiddleware(eventsMap, ga);

export default analyticsReduxMiddleware;
