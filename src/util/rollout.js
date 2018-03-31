import times from 'lodash/fp/times';
import { types as rollTypes } from './attributeRolls';

const rollout = ({
    rollType,
}) => {
    const rollFn = rollTypes[rollType];

    return times(rollFn, 6);
}

export default rollout;