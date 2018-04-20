import map from 'lodash/fp/map';
import flow from 'lodash/fp/flow';
import { connect } from 'react-redux';
import { fmtReq } from '../../../util/requirements';
import RequirementsListView from './RequirementsListView';
import removeRequirement from '../../../actions/removeRequirement';

const fmtReqs = flow(
  map(fmtReq),
  map(reqStr => reqStr[0].toUpperCase().concat(reqStr.substr(1))),
);

const mapStateToProps = ({ requirements }) => ({
  requirements:
    requirements.length === 0 ? requirements : fmtReqs(requirements),
});

const mapDispatchToProps = {
  onRemoveRequirement: removeRequirement,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  RequirementsListView,
);
