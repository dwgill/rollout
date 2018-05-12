import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import { fmtReq } from '../util/requirements';

const fmtReqs = flow(
  map(fmtReq),
  map(reqStr => reqStr[0].toUpperCase().concat(reqStr.substr(1))),
);

const requirementsAsText = state => {
  const { requirements } = state;
  return requirements.length === 0 ? requirements : fmtReqs(requirements);
};

export default requirementsAsText;
