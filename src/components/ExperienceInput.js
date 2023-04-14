import React, { Component } from "react";
import uniqid from "uniqid";

class ExperienceInput extends Component {
  render() {
    const { experiences, addExperience, changeExperience, handleDeleteExperience } = this.props;

    return (
      <div>
        <h2>Experiences</h2>
        {experiences?.map((experience, index) => {
          return (
            <div key={experience.id}>
              <label htmlFor="jobTitle">Job Title</label>
              <input
                  onChange={(e) => changeExperience(e, experience.id)}
                  // value={experience.jobTitle}
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="Job Title"
              />
              <label htmlFor="companyName">Company Name</label>
              <input
                onChange={(e) => changeExperience(e,experience.id)}
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company Name"
              />
              <label htmlFor="startMonth">Start month</label>
              <input
                onChange={(e) => changeExperience(e,experience.id)}
                type="text"
                id="startMonth"
                name="startMonth"
                placeholder="Start month"
              />
              <label htmlFor="startYear">Start year</label>
              <input
                onChange={(e) => changeExperience(e,experience.id)}
                type="number"
                id="startYear"
                name="startYear"
                placeholder="Start year"
              />
              <label htmlFor="endMonth">End month</label>
              <input
                onChange={(e) => changeExperience(e,experience.id)}
                type="text"
                id="endMonth"
                name="endMonth"
                placeholder="End month"
              />
              <label htmlFor="endYear">End year</label>
              <input
                onChange={(e) => changeExperience(e,experience.id)}
                type="number"
                id="endYear"
                name="endYear"
                placeholder="End year"
              />
              <label htmlFor="currentJob">Current Job</label>
              <input
                onChange={(e) => changeExperience(e,experience.id)}
                type="checkbox"
                id="currentJob"
                name="currentJob"
              />
              <textarea
                onChange={(e) => changeExperience(e,experience.id)}
                id="description"
                name="description"
                placeholder="Description of job and accomplishments"
              />
              <button onClick={() => handleDeleteExperience(index)}>Delete</button>
            </div>
          );
        })}
        <button onClick={addExperience}>Add</button>
      </div>
    );
  }
}

export default ExperienceInput;