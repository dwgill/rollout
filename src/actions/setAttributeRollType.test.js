import range from 'lodash/fp/range';
import setAttributeRollType from './setAttributeRollType';
import { SET_ATTRIBUTE_ROLL_TYPE } from './types';

describe('setAttributeRollType()', () => {
  it(`produces action object with the type ${SET_ATTRIBUTE_ROLL_TYPE}`, () => {
    expect(setAttributeRollType()).toHaveProperty(
      'type',
      SET_ATTRIBUTE_ROLL_TYPE,
    );
  });

  it('works well with string payloads', () => {
    for (const payloadVal of range(0, 100).map(String)) {
      expect(setAttributeRollType(payloadVal)).toEqual({
        type: SET_ATTRIBUTE_ROLL_TYPE,
        payload: payloadVal,
      });
    }
  });
});
