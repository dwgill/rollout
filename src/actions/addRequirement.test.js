import {
  AT_LEAST,
  AT_MOST,
  EXACTLY,
  NetModConstraint,
  NetScoreConstraint,
  ScoreConstraint,
} from '../rollout-core/ConstraintKinds';
import addRequirement, {
  addNetModRequirement,
  addNetScoreRequirement,
  addScoreRequirement,
} from './addRequirement';
import { ADD_REQUIREMENT } from './types';

const mockNetModConstraint = NetModConstraint(AT_LEAST, 2);
const mockNetScoreConstraint = NetScoreConstraint(AT_MOST, 71);
const mockScoreConstraint = ScoreConstraint(EXACTLY, 1, AT_MOST, 10);
const mockConstraints = [
  mockNetModConstraint,
  mockNetScoreConstraint,
  mockScoreConstraint,
];

describe('addRequirement', () => {
  describe('addRequirement()', () => {
    it('produces an action object with the ADD_REQUIREMENT type', () => {
      expect(addRequirement()).toHaveProperty('type', ADD_REQUIREMENT);
    });

    it('produces an action object with the provided payload', () => {
      const testVal = 'testVal';
      expect(addRequirement(testVal)).toHaveProperty('payload', testVal);
    });

    it('works well with requirement objects', () => {
      for (const req of mockConstraints) {
        expect(addRequirement(req)).toEqual({
          type: ADD_REQUIREMENT,
          payload: req,
        });
      }
    });
  });

  describe('addNetModRequirement()', () => {
    it('produces an action object with the ADD_REQUIREMENT type', () => {
      expect(
        addNetModRequirement({ limit: 'AT_LEAST', value: 2 }),
      ).toHaveProperty('type', ADD_REQUIREMENT);
    });

    it('creates a constraint of the appropriate kind', () => {
      const limit = 'AT_LEAST';
      const value = 2;
      const constraint = NetModConstraint(limit, value);
      const result = addNetModRequirement({ limit, value });
      expect(result.payload).toEqual(constraint);
    });
  });

  describe('addNetScoreRequirement()', () => {
    it('produces an action object with the ADD_REQUIREMENT type', () => {
      expect(
        addNetScoreRequirement({ limit: 'AT_MOST', value: 75 }),
      ).toHaveProperty('type', ADD_REQUIREMENT);
    });

    it('creates a constraint of the appropriate kind', () => {
      const constraint = NetScoreConstraint('AT_LEAST', 75);
      const result = addNetScoreRequirement({ limit: 'at least', value: '75' });
      expect(result.payload).toEqual(constraint);
    });
  });

  describe('addScoreRequirement()', () => {
    it('produces an action object with the ADD_REQUIREMENT type', () => {
      expect(
        addScoreRequirement({
          numScores: 2,
          score: 15,
          scoreLimit: 'at least',
          numScoresLimit: 'AT_LEAST',
        }),
      ).toHaveProperty('type', ADD_REQUIREMENT);
    });

    it('creates a constraint of the appropriate kind', () => {
      const constraint = ScoreConstraint('AT_LEAST', 2, 'AT_LEAST', 15);
      const result = addScoreRequirement({
        numScores: '2',
        numScoresLimit: 'at least',
        score: 15,
        scoreLimit: 'AT LEAST',
      });
      expect(result.payload).toEqual(constraint);
    });
  });
});
