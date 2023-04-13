import React, { Component } from "react";
import uniqid from "uniqid";

class ExperienceInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [
        {
          jobTitle: "",
          companyName: "",
          startDate: "",
          endDate: "",
          currentJob: false,
          description: "",
        },
      ],
    };
  }

  handleChange = (e, index) => {
    const { name, value } = e.target;
    const experiences = [...this.state.experiences];
    experiences[index][name] = value;
    this.setState({ experiences });
  };

  handleAddExperience = () => {
    const newExperience = {
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      currentJob: false,
      description: "",
    };
    this.setState((prevState) => ({
      experiences: [...prevState.experiences, newExperience],
    }));
  };

  handleDeleteExperience = (index) => {
    const experiences = [...this.state.experiences];
    experiences.splice(index, 1);
    this.setState({ experiences });
  };

  render() {
    const { experiences } = this.state;

    return (
      <div>
        <h2>Experiences</h2>
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <Experience
                index={index}
                jobTitle={experience.jobTitle}
                companyName={experience.companyName}
                startDate={experience.startDate}
                endDate={experience.endDate}
                currentJob={experience.currentJob}
                description={experience.description}
                handleChange={this.handleChange}
              />
              <button onClick={() => this.handleDeleteExperience(index)}>Delete</button>
            </div>
          );
        })}
        <button onClick={this.handleAddExperience}>Add</button>
      </div>
    );
  }
}

const Experience = (props) => {
    const { jobTitle, companyName, startDate, endDate, currentJob, description } = props;

    return (
        <div>
        <label htmlFor="jobTitle">Job Title</label>
        <input
            onChange={(e) => props.handleChange(e, props.index)}
            value={jobTitle}
            type="text"
            id="jobTitle"
            name="jobTitle"
        />
        {/* add inputs for companyName, startDate, endDate, currentJob, and description here */}
        </div>
    );
};

export default ExperienceInput;