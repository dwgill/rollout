import range from 'lodash/fp/range';
import removeRequirement from './removeRequirement';
import { REMOVE_REQUIREMENT } from './types';

describe('removeRequirement()', () => {
  it('produces an action object with the REMOVE_REQUIREMENT type', () => {
    expect(removeRequirement()).toHaveProperty('type', REMOVE_REQUIREMENT);
  });

  it('produces an action object with the provided payload', () => {
    const testVal = 'testVal';
    expect(removeRequirement(testVal)).toHaveProperty('payload', testVal);
  });

  it('works well with number payloads', () => {
    for (const num of range(0, 100)) {
      expect(removeRequirement(num)).toEqual({
        type: REMOVE_REQUIREMENT,
        payload: num,
      });
    }
  });
});
