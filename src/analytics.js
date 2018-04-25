import GoogleAnalyticsGtag, { trackEvent } from '@redux-beacon/google-analytics-gtag';

const analyticsID = process.env.REACT_APP_ANALYTICS_ID;
const ga = GoogleAnalyticsGtag(trackingId);

const categories = {
    display: 'Display',
    requirements: 'Requirements',
    rollType: 'Roll Type',
    rollout: 'Rollout',
    presets: 'Presets',
}

const eventsMap = {
    SET_ATTRIBUTE_ROLL_TYPE: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.rollType,
        action: type,
        // value: null,
        label: payload,
    })),
    SET_ROLL_IN_ORDER: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.display,
        action: type,
        // value: null,
        label: payload,
    })),
    SET_FORCE_STALE: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.display,
        action: type,
        // value: null,
        label: payload,
    })),
    SET_DISPLAY_DICE: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.display,
        action: type,
        // value: null,
        label: payload,
    })),
    DO_ROLLOUT: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.rollout,
        action: type,
        // value: null,
        // label: null, TODO
    })),
    FAIL_ROLLOUT: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.rollout,
        action: type,
        // value: null,
        // label: null,
    })),
    ADD_REQUIREMENT: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.requirements,
        action: type,
        // value: null,
        // label: null,
    })),
    REPLACE_REQUIREMENTS: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.requirements,
        action: type,
        // value: null,
        // label: null,
    })),
    REMOVE_REQUIREMENT: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.requirements,
        action: type,
        // value: null,
        // label: null,
    })),
    PRESET_COLVILLE: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.presets,
        action: type,
        // value: null,
        // label: null,
    })),
    PRESET_COLVILLE_CLASSIC: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.presets,
        action: type,
        // value: null,
        // label: null,
    })),
    PRESET_MERCER: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.presets,
        action: type,
        // value: null,
        // label: null,
    })),
    PRESET_MERCER_PLUS: trackEvent(({type, payload}, prevState, nextState) => ({
        category: categories.presets,
        action: type,
        // value: null,
        // label: null,
    })),

}