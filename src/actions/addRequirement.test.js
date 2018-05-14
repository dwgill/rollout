import { netModReq, netScoreReq, scoreReq } from '../util/requirements';
import addRequirement from './addRequirement';
import { ADD_REQUIREMENT } from './types';

const mockNetModReq = netModReq('AT_LEAST', 2);
const mockNetScoreReq = netScoreReq('AT_MOST', 71);
const mockScoreReq = scoreReq('EXACTLY', 1, 'AT_MOST', 10);
const mockReqs = [mockNetModReq, mockNetScoreReq, mockScoreReq];

describe('addRequirementList()', () => {
  it('produces an action object with the ADD_REQUIREMENT type', () => {
    expect(addRequirement()).toHaveProperty('type', ADD_REQUIREMENT);
  });

  it('produces an action object with the provided payload', () => {
    const testVal = 'testVal';
    expect(addRequirement(testVal)).toHaveProperty('payload', testVal);
  });

  it('works well with requirement objects', () => {
    for (const req of mockReqs) {
      expect(addRequirement(req)).toEqual({
        type: ADD_REQUIREMENT,
        payload: req,
      });
    }
  });
});
