import React from 'react';
import SectionHeading from '../SectionHeading';
import SectionSubHeading from '../SectionSubHeading';
import RequirementsList from '../RequirementsList';
import AddReqModal from './AddReqModal';
import PresetsModal from './PresetsModal';
import styles from './styles.module.css';

const RequirementDisplay = () => (
  <>
    <SectionHeading>Requirements</SectionHeading>
    <SectionSubHeading>
      Discard rollouts unless they conform with the following
    </SectionSubHeading>
    <RequirementsList />
    <div className={styles.buttonRow}>
      <PresetsModal />
      <AddReqModal />
    </div>
  </>
);

export default RequirementDisplay;
