import entries from 'lodash/fp/entries';
import { STANDARD } from '../rollout-core/AttributeRollKinds';
import {
  AT_LEAST,
  NetModConstraint,
  NetScoreConstraint,
  ScoreConstraint,
} from '../rollout-core/ConstraintKinds';
import presetColville from './presetColville';
import presetColvilleClassic from './presetColvilleClassic';
import presetMercer from './presetMercer';
import presetMercerPlus from './presetMercerPlus';
import replaceRequirements from './replaceRequirements';
import setAttributeRollType from './setAttributeRollType';
import setRollInOrder from './setRollInOrder';
import {
  PRESET_COLVILLE,
  PRESET_COLVILLE_CLASSIC,
  PRESET_MERCER,
  PRESET_MERCER_PLUS,
} from './types';

function testPresetActionCreator({ name: acName, func: acFunc, dispatches }) {
  describe(`${acName}()`, () => {
    const mockDispatch = jest.fn();
    acFunc()(mockDispatch);
    for (const [desc, val] of entries(dispatches)) {
      it(`${desc}`, () => {
        expect(mockDispatch).toHaveBeenCalledWith(val);
      });
    }
  });
}

testPresetActionCreator({
  name: 'presetColville',
  func: presetColville,
  dispatches: {
    'dispatches the PRESET_COLVILLE action': { type: PRESET_COLVILLE },
    'configures to roll in order': setRollInOrder(true),
    'sets the roll type to standard': setAttributeRollType(STANDARD),
    'requires a net mod of at least +2': replaceRequirements([
      NetModConstraint(AT_LEAST, 2),
    ]),
  },
});

testPresetActionCreator({
  name: 'presetColvilleClassic',
  func: presetColvilleClassic,
  dispatches: {
    'dispatches the PRESET_COLVILLE_CLASSIC action': {
      type: PRESET_COLVILLE_CLASSIC,
    },
    'configures to roll in order': setRollInOrder(true),
    'sets the roll type to standard': setAttributeRollType(STANDARD),
    'requires at least 2 scores of at least 15': replaceRequirements([
      ScoreConstraint(AT_LEAST, 2, AT_LEAST, 15),
    ]),
  },
});

testPresetActionCreator({
  name: 'presetMercer',
  func: presetMercer,
  dispatches: {
    'dispatches the PRESET_MERCER action': { type: PRESET_MERCER },
    'configures to not roll in order': setRollInOrder(false),
    'sets the roll type to standard': setAttributeRollType(STANDARD),
    'requires a total score of at least 70': replaceRequirements([
      NetScoreConstraint(AT_LEAST, 70),
    ]),
  },
});

testPresetActionCreator({
  name: 'presetMercerPlus',
  func: presetMercerPlus,
  dispatches: {
    'dispatches the PRESET_MERCER_PLUS action': { type: PRESET_MERCER_PLUS },
    'configures to not roll in order': setRollInOrder(false),
    'sets the roll type to standard': setAttributeRollType(STANDARD),
    'requires a total score of at least 75': replaceRequirements([
      NetScoreConstraint(AT_LEAST, 75),
    ]),
  },
});
