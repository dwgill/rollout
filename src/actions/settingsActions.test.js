import setDisplayDice from './setDisplayDice';
import setDisplayMods from './setDisplayMods';
import setForceStale from './setForceStale';
import setRollInOrder from './setRollInOrder';
import {
  SET_DISPLAY_DICE,
  SET_DISPLAY_MODS,
  SET_FORCE_STALE,
  SET_ROLL_IN_ORDER,
} from './types';

function testBooleanSetterActionCreator({
  name: acName,
  func: acFunc,
  type: acType,
}) {
  describe(`${acName}()`, () => {
    it(`produces an action object with the type ${acType}`, () => {
      expect(acFunc()).toHaveProperty('type', acType);
    });

    it('works well with boolean payloads', () => {
      for (const payloadVal of [true, false]) {
        expect(acFunc(payloadVal)).toEqual({
          type: acType,
          payload: payloadVal,
        });
      }
    });
  });
}

testBooleanSetterActionCreator({
  name: 'setDisplayDice',
  func: setDisplayDice,
  type: SET_DISPLAY_DICE,
});

testBooleanSetterActionCreator({
  name: 'setForceStale',
  func: setForceStale,
  type: SET_FORCE_STALE,
});

testBooleanSetterActionCreator({
  name: 'setRollInOrder',
  func: setRollInOrder,
  type: SET_ROLL_IN_ORDER,
});

testBooleanSetterActionCreator({
  name: 'setDisplayMods',
  func: setDisplayMods,
  type: SET_DISPLAY_MODS,
});
