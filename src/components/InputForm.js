import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';

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
      </div>
    );
  }
}

export default InputForm;
