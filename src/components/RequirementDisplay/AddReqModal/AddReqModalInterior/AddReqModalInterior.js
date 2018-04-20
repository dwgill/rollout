import React from 'react';
import find from 'lodash/fp/find';
import map from 'lodash/fp/map';
import Field from '../../../Field';
import styles from './styles.module.css';
import NewScoreReqForm from './NewScoreReqForm';
import NewModReqForm from './NewModReqForm';
import NewNetScoreReqForm from './NewNetScoreReqForm';

const reqTypes = [
  {
    key: 'ABILITY_SCORE',
    title: 'Ability Score(s)',
    desc: 'Require zero or more scores to be above or below a given value',
  },
  {
    key: 'NET_ABILITY_MODIFIER',
    title: 'Ability Modifiers Total',
    desc:
      'Require the total of all modifiers to be above or below a given value',
  },
  {
    key: 'ABILITY_SCORE_TOTAL',
    title: 'Ability Scores Total',
    desc: 'Require the total of all scores to be above or below a given value',
  },
];

const newReqComponentsByType = {
  ABILITY_SCORE: NewScoreReqForm,
  NET_ABILITY_MODIFIER: NewModReqForm,
  ABILITY_SCORE_TOTAL: NewNetScoreReqForm,
};

/**
 * @typedef AddReqModalInteriorViewProps
 */

/**
 * @typedef AddReqModalInteriorViewState
 */

/** @type React.Component<AddReqModalInteriorViewProps, AddReqModalInteriorViewState> */
class AddReqModalInterior extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reqType: reqTypes[0].key,
    };

    this.handleChangeReqType = this.handleChangeReqType.bind(this);
  }

  handleChangeReqType(event) {
    const newReqTypeKey = event.currentTarget.value;
    this.setState({
      reqType: newReqTypeKey,
    });
  }

  render() {
    const { reqType: selectedReqType } = this.state;
    const { onCompletion: handleCompletion } = this.props;
    const selectedReq = find({ key: selectedReqType })(reqTypes);
    const NewReqComponent = newReqComponentsByType[selectedReqType];
    return (
      <>
        <h2 className={styles.title}>New Requirement</h2>
        <div className={styles.repTypeSelectionContainer}>
          <Field
            label="Requirement Kind"
            labelSize="normal"
            help={selectedReq.desc}
          >
            <div className={styles.selectContainer}>
              <select
                value={selectedReqType}
                onChange={this.handleChangeReqType}
              >
                {map(({ key, title }) => (
                  <option value={key} key={key}>
                    {title}
                  </option>
                ))(reqTypes)}
              </select>
            </div>
          </Field>
        </div>
        {NewReqComponent && (
          <>
            <hr className={styles.divider} />
            <NewReqComponent onCompletion={handleCompletion} />
          </>
        )}
      </>
    );
  }
}

export default AddReqModalInterior;
