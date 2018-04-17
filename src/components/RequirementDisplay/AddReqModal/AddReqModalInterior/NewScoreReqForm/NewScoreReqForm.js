import React from 'react';
import range from 'lodash/fp/range';
import map from 'lodash/fp/map';
import styles from './styles.module.css';
import Field from '../../../../Field';
import Select from '../../../../Select';
import { reqLimitValues as validLimits } from '../../../../../util/requirements';

const validNumScores = range(0, 7);

const mapNumsToOpts = map(num => (
  <option key={num} value={num}>
    {num}
  </option>
));

const mapLimitsToOpts = map(limitStr => (
  <option key={limitStr} value={limitStr}>
    {limitStr.toLowerCase().replace('_', ' ')}
  </option>
));

const fmtScoreLabel = numScores => {
  return `ability ${
    Number(numScores) === 1 ? 'score that is' : 'scores that are'
  }`;
};

class NewScoreReqForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      numScores: 1,
      score: 10,
      scoreLimit: validLimits[0],
      numScoresLimit: validLimits[0],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeNumScores = this.makeStateSetter('numScores');
    this.handleChangeScore = this.makeStateSetter('score');
    this.handleChangeScoreLimit = this.makeStateSetter('scoreLimit');
    this.handleChangeNumScoresLimit = this.makeStateSetter('numScoresLimit');
  }

  makeStateSetter(stateName) {
    return event => {
      const newValue = event.target.value;
      const oldValue = this.state[stateName];
      if (oldValue !== newValue) {
        this.setState({
          [stateName]: newValue,
        });
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { numScores, score, scoreLimit, numScoresLimit } = this.state;
    const {
      onAddRequirement: handleAddRequirement,
      onCompletion: handleCompletion,
    } = this.props;
    if (handleAddRequirement) {
      handleAddRequirement({
        numScores: Number(numScores),
        score: Number(score),
        scoreLimit,
        numScoresLimit,
      });
    }
    if (handleCompletion) {
      handleCompletion();
    }
  }

  render() {
    const { numScores, score, scoreLimit, numScoresLimit } = this.state;
    const { minPossibleScore } = this.props;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <Field label="The set of ability scores must contain">
          <Select
            value={numScoresLimit}
            onChange={this.handleChangeNumScoresLimit}
          >
            {mapLimitsToOpts(validLimits)}
          </Select>
          <Select
            value={numScores}
            onChange={this.handleChangeNumScores}
            className={styles.numSelect}
          >
            {mapNumsToOpts(validNumScores)}
          </Select>
        </Field>
        <Field label={fmtScoreLabel(numScores)}>
          <Select value={scoreLimit} onChange={this.handleChangeScoreLimit}>
            {mapLimitsToOpts(validLimits)}
          </Select>
          <Select
            value={score}
            onChange={this.handleChangeScore}
            className={styles.numSelect}
          >
            {mapNumsToOpts(range(minPossibleScore, 19))}
          </Select>
        </Field>
        <button className={styles.confirmBtn} type="submit">
          Confirm
        </button>
      </form>
    );
  }
}

export default NewScoreReqForm;
