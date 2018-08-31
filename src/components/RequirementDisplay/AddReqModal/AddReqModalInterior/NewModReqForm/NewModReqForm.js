import map from 'lodash/fp/map';
import range from 'lodash/fp/range';
import React from 'react';
import { limits as validLimits } from '../../../../../rollout-core/ConstraintKinds';
import Field from '../../../../Field';
import Select from '../../../../Select';
import styles from './styles.module.css';

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

class NewModReqForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      limit: validLimits[0],
      value: 0,
    };

    this.handleSetLimit = this.makeStateSetter('limit');
    this.handleSetValue = this.makeStateSetter('value');
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { limit, value } = this.state;
    const {
      onAddRequirement: handleAddRequirement,
      onCompletion: handleCompletion,
    } = this.props;
    if (handleAddRequirement) {
      handleAddRequirement({
        value: Number(value),
        limit,
      });
    }
    if (handleCompletion) {
      handleCompletion();
    }
  }

  render() {
    const { limit, value } = this.state;
    const { minPossibleMod } = this.props;

    const validValues = range(minPossibleMod, 4 * 6 + 1);

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <Field label="All the ability modifiers added together must be">
          <Select value={limit} onChange={this.handleSetLimit}>
            {mapLimitsToOpts(validLimits)}
          </Select>
          <Select value={value} onChange={this.handleSetValue}>
            {mapNumsToOpts(validValues).reverse()}
          </Select>
        </Field>
        <button className={styles.confirmBtn} type="submit">
          Confirm
        </button>
      </form>
    );
  }
}

export default NewModReqForm;
