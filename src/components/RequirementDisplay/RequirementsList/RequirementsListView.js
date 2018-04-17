import React from 'react';
import styles from './styles.module.css';
import Requirement from './Requirement';

const RequirementsListView = ({
  requirements,
  onRemoveRequirement: handleRemoveRequirement,
}) => (
  <ul className={styles.list}>
    {requirements.map((req, index) => (
      <Requirement
        id={index}
        key={index}
        text={req}
        onDelete={handleRemoveRequirement}
      />
    ))}
  </ul>
);

export default RequirementsListView;
