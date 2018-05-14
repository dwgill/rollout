import range from 'lodash/fp/range';
import { netModReq, netScoreReq, scoreReq } from '../util/requirements';
import removeRequirement from './removeRequirement';
import { REMOVE_REQUIREMENT } from './types';

const mockNetModReq = netModReq('AT_LEAST', 2);
const mockNetScoreReq = netScoreReq('AT_MOST', 71);
const mockScoreReq = scoreReq('EXACTLY', 1, 'AT_MOST', 10);
const mockReqs = [mockNetModReq, mockNetScoreReq, mockScoreReq];

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
