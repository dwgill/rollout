import React from 'react';
import cls from 'classnames';

const SectionSubHeading = ({ children, className }) => (
  <h5 className={cls(className, 'subtitle', 'is-6')}>{children}</h5>
);

SectionSubHeading.displayName = 'SectionSubHeading';

export default SectionSubHeading;
