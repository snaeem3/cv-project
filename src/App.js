import React, { Component } from 'react';
import uniqid from 'uniqid';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';
import OutputView from './components/OutputView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
      educations: [],
    };
  }

  addExperience = () => {
    const experience = {
      id: uniqid(),
      jobTitle: '',
      companyName: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      currentJob: false,
      description: '',
    };
    this.setState({
      experiences: [...this.state.experiences, experience],
    });
  };

  changeExperience = (event, givenID) => {
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    const { experiences } = this.state;
    let experience = {};
    for (let i = 0; i < this.state.experiences.length; i++) {
      if (this.state.experiences[i].id === givenID) {
        experience = { ...experiences[i] };
        if (event.target.name === 'currentJob') {
          // currentJob is the only boolean prop
          experience[event.target.name] = event.target.checked;
        } else {
          experience[event.target.name] = event.target.value;
        }
        experiences[i] = experience;
      }
    }
    this.setState({ experiences });
  };

  handleDeleteExperience = (index) => {
    this.setState({
      experiences: this.state.experiences.filter((_, i) => i !== index), // Callback function returns every value but the one at the given index
    });
  };

  addEducation = () => {
    const education = {
      id: uniqid(),
      schoolName: '',
      major: '',
      startMonth: '',
      endMonth: '',
    };
    this.setState({
      educations: [...this.state.educations, education],
    });
  };

  changeEducation = (event, givenID) => {
    const { educations } = this.state;
    let education = {};
    for (let i = 0; i < this.state.educations.length; i++) {
      if (this.state.educations[i].id === givenID) {
        education = { ...educations[i] };
        education[event.target.name] = event.target.value;
        educations[i] = education;
      }
    }
    this.setState({ educations });
  };

  handleDeleteEducation = (index) => {
    this.setState({
      educations: this.state.educations.filter((_, i) => i !== index), // Callback function returns every value but the one at the given index
    });
  };

  render() {
    const { experiences, educations } = this.state;

    return (
      <div>
        <InputForm
          experiences={experiences}
          educations={educations}
          addExperience={this.addExperience}
          changeExperience={this.changeExperience}
          handleDeleteExperience={this.handleDeleteExperience}
          addEducation={this.addEducation}
          changeEducation={this.changeEducation}
          handleDeleteEducation={this.handleDeleteEducation}
        />
        <OutputView experiences={experiences} educations={educations} />
      </div>
    );
  }
}

export default App;
