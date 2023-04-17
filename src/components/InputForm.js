import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';
import EducationInput from './EducationInput';

class InputForm extends Component {
  render() {
    const { experiences, educations, addExperience, changeExperience, handleDeleteExperience, addEducation, changeEducation, handleDeleteEducation } = this.props;

    return (
      <div className="form" id="input-form">
        <ExperienceInput
          experiences={experiences}
          addExperience={addExperience}
          changeExperience={changeExperience}
          handleDeleteExperience={handleDeleteExperience}
        />
        <EducationInput
          educations={educations}
          addEducation={addEducation}
          changeEducation={changeEducation}
          handleDeleteEducation={handleDeleteEducation}
        />
      </div>
    );
  }
}

export default InputForm;
