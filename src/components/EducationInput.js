import React, { Component } from 'react';
import uniqid from 'uniqid';

class EducationInput extends Component {
  render() {
    const { educations, addEducation, changeEducation, handleDeleteEducation } =
      this.props;

    return (
      <section id="education-input-container" className="input-container">
        <h2 className="section-header">Education</h2>
        {educations?.map((education, index) => (
          <div key={education.id} className="input-container">
            <label htmlFor="schoolName">School/University</label>
            <input
              onChange={(e) => changeEducation(e, education.id)}
              value={education.schoolName}
              type="text"
              id="schoolName"
              name="schoolName"
              placeholder="School/University Name"
            />
            <label htmlFor="program">Program or Major</label>
            <input
              onChange={(e) => changeEducation(e, education.id)}
              value={education.program}
              type="text"
              id="program"
              name="program"
              placeholder="Degree in Major"
            />
            <label htmlFor="startMonth">Start month</label>
            <input
              onChange={(e) => changeEducation(e, education.id)}
              value={education.startMonth}
              type="month"
              id="startMonth"
              name="startMonth"
            />
            <label htmlFor="endMonth">End month</label>
            <input
              onChange={(e) => changeEducation(e, education.id)}
              value={education.endMonth}
              type="month"
              id="endMonth"
              name="endMonth"
            />
            <button
              onClick={() => handleDeleteEducation(index)}
              type="button"
              className="delete"
            >
              Delete
            </button>
          </div>
        ))}
        <button onClick={addEducation} type="button" className="add-btn">
          Add Education
        </button>
      </section>
    );
  }
}

export default EducationInput;
