import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';

class InputForm extends Component {
  render() {
    const { experiences, educations, addExperience } = this.props;

    return (
      <div>
        <ExperienceInput
          experiences={experiences}
          addExperience={addExperience}
        />
      </div>
    );
  }
}

export default InputForm;
