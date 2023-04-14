import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import InputForm from './components/InputForm';
import OutputView from './components/OutputView';
import uniqid from "uniqid";

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
    let experiences = this.state.experiences;
    let experience = {};
    for (let i = 0; i < this.state.experiences.length; i++) {
      if (this.state.experiences[i].id === givenID) {
        experience = {...experiences[i]};
        if (event.target.name === 'currentJob') { // currentJob is the only boolean prop
          experience[event.target.name] = event.target.checked;
        } else {
          experience[event.target.name] = event.target.value;
        }
        experiences[i] = experience;
      }
    }
    this.setState({experiences});
  }

  handleDeleteExperience = (index) => {
    this.setState({
      experiences: this.state.experiences.filter((_, i) => i !== index)
    });
  }

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
        <OutputView experiences={experiences} educations={educations}></OutputView>
      </div>
    );
  }
}

export default App;
