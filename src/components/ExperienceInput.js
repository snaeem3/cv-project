import React, { Component } from 'react';
import uniqid from 'uniqid';

class ExperienceInput extends Component {
  render() {
    const {
      experiences,
      addExperience,
      changeExperience,
      handleDeleteExperience,
    } = this.props;

    return (
      <section className="input-container">
        <h2>Experiences</h2>
        {experiences?.map((experience, index) => (
          <div key={experience.id} className="input-container">
            <label htmlFor="companyName">Company Name</label>
            <input
              onChange={(e) => changeExperience(e, experience.id)}
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
            />
            <label htmlFor="jobTitle">Job Title</label>
            <input
              onChange={(e) => changeExperience(e, experience.id)}
              // value={experience.jobTitle}
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Job Title"
            />
            <label htmlFor="startMonth">Start month</label>
            <input
              onChange={(e) => changeExperience(e, experience.id)}
              type="month"
              id="startMonth"
              name="startMonth"
              placeholder="Start month"
            />
            {/* <label htmlFor="startYear">Start year</label>
              <input
                onChange={(e) => changeExperience(e,experience.id)}
                type="number"
                id="startYear"
                name="startYear"
                placeholder="Start year"
              /> */}
            <label htmlFor="endMonth">End month</label>
            <input
              onChange={(e) => changeExperience(e, experience.id)}
              type="month"
              id="endMonth"
              name="endMonth"
              placeholder="End month"
            />
            {/* <label htmlFor="endYear">End year</label>
              <input
                onChange={(e) => changeExperience(e,experience.id)}
                type="number"
                id="endYear"
                name="endYear"
                placeholder="End year"
              /> */}
            <label htmlFor="currentJob">Current Job</label>
            <input
              onChange={(e) => changeExperience(e, experience.id)}
              type="checkbox"
              id="currentJob"
              name="currentJob"
            />
            <label htmlFor="description">Accomplishments</label>
            <textarea
              onChange={(e) => changeExperience(e, experience.id)}
              id="description"
              name="description"
              placeholder="Description of job and accomplishments"
            />
            <button onClick={() => handleDeleteExperience(index)} type="button">
              Delete
            </button>
          </div>
        ))}
        <button onClick={addExperience} type="button">
          Add
        </button>
      </section>
    );
  }
}

export default ExperienceInput;
