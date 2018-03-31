import random from 'lodash/fp/random';
import times from 'lodash/fp/times';
import min from 'lodash/fp/min';
import pullAt from 'lodash/fp/pullAt';
 
/**
 * @param {number} x The number of d6s to roll.
 * @returns {number[]} An array of random integers between 1 and 6.
 */
const xd6 = (x=1) => times(() => random(1, 6), x)

/** @returns {rollout} A rollout of four dice with the lowest discarded. */
export const standard = () => {
    const _4d6 = xd6(4);
    const lowset1d6 = min(_4d6);
    const higher3d6 = pullAt(_4d6.indexOf(lowset1d6))(_4d6);
    return {
        constituents: higher3d6,
        discarded: [lowset1d6],
    };
}

/** @returns {rollout} A rollout of three dice. */
export const classic = () => ({
    constituents: xd6(3),
    discarded: [],
});

/** @returns {rollout} A rollout of six plus two dice. */
export const augmented = () => ({
    constituents: [6].concat(xd6(2)),
    discarded: [],
});

export const types = {
    STANDARD: standard,
    CLASSIC: classic,
    AUGMENTED: augmented,
};

/**
 * @typedef {object} rollout
 * @prop {number[]} constituents 
 * @prop {number[]} discarded
 */