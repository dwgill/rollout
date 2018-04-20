import React from 'react';
import cls from 'classnames';

const SectionHeading = ({ children, className }) => (
  <h1 className={cls(className, 'title', 'is-4')}>{children}</h1>
);

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;
