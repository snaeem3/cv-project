import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
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

  addExperience = (experience) => {
    this.setState({
      experiences: [...this.state.experiences, experience],
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
        />
        <OutputView experiences={experiences} educations={educations}></OutputView>
      </div>
    );
  }
}

export default App;
