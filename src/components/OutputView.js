import React from 'react';
import ExperienceOutput from './ExperienceOutput';
import EducationOutput from './EducationOutput';
import PersonalOutput from './PersonalOutput';

const OutputView = (props) => {
  const { personal, experiences, educations } = props;

  return (
    <div id="output-container" className="portrait">
      <PersonalOutput personal={personal} />
      <ExperienceOutput experiences={experiences} />
      <EducationOutput educations={educations} />
    </div>
  );
};

export default OutputView;
