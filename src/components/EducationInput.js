import React, { Component } from 'react';
import uniqid from 'uniqid';

class EducationInput extends Component {
  render() {
    const { educations, addEducation, changeEducation, handleDeleteEducation } =
      this.props;

    return (
      <section id="education-input-container" className="input-container">
        <h2>Education</h2>
        {educations?.map((education, index) => (
          <div key={education.id} className="input-container">
            <label htmlFor="schoolName">School/University</label>
            <input
              onChange={(e) => changeEducation(e, education.id)}
              type="text"
              id="schoolName"
              name="schoolName"
              placeholder="School/University Name"
            />
            <label htmlFor="program">Program or Major</label>
            <input
              onChange={(e) => changeEducation(e, education.id)}
              type="text"
              id="program"
              name="program"
              placeholder="Degree in Major"
            />
            <label htmlFor="startMonth">Start month</label>
            <input
              onChange={(e) => changeEducation(e, education.id)}
              type="month"
              id="startMonth"
              name="startMonth"
            />
            <label htmlFor="endMonth">End month</label>
            <input
              onChange={(e) => changeEducation(e, education.id)}
              type="month"
              id="endMonth"
              name="endMonth"
            />
            <button onClick={() => handleDeleteEducation(index)} type="button">
              Delete
            </button>
          </div>
        ))}
        <button onClick={addEducation} type="button">
          Add
        </button>
      </section>
    );
  }
}

export default EducationInput;
