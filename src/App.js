import React, { Component } from 'react';
import uniqid from 'uniqid';
import logo from './logo.svg';
// import './App.css';
import InputForm from './components/InputForm';
import OutputView from './components/OutputView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
      },
      experiences: [],
      educations: [],
    };
  }

  changePersonal = (event) => {
    const personal = { ...this.state.personal };
    personal[event.target.name] = event.target.value;
    this.setState({ personal });
  };

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
      program: '',
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

  reset = () => {
    this.setState({
      personal: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
      },
      experiences: [],
      educations: [],
    });
  };

  handleSample = () => {
    const toyMakerDescription =
      'Design and produce a wide range of toys including dolls, stuffed animals, board games, and puzzles' +
      '\n' +
      'Use a variety of tools and equipment such as saws, drills, sanders, and sewing machines' +
      '\n' +
      'Collaborate with other elves and the workshop supervisor to meet production deadlines' +
      '\n' +
      'Conduct quality checks on toys to ensure they meet North Pole standards' +
      '\n' +
      'Participate in the annual Christmas Eve delivery process, ensuring each child receives their desired gifts';
    this.setState({
      personal: {
        firstName: 'Eric',
        lastName: 'Elf',
        email: 'erictheelf@northpole.com',
        phone: '123-456-7890',
        location: 'North Pole, Arctic Circle',
      },
      experiences: [
        {
          jobTitle: 'Toy Maker',
          companyName: 'North Pole Workshop',
          startMonth: '2000-01',
          endMonth: '2020-02',
          currentJob: true,
          description: toyMakerDescription,
        },
      ],
      educations: [
        {
          schoolName: 'Elf School',
          program: 'B.S. in Toy Manufacturing',
          startMonth: '1996-08',
          endMonth: '1999-05',
        },
      ],
    });
  };

  render() {
    const { personal, experiences, educations } = this.state;

    return (
      <div>
        <header>
          <title>CV Maker</title>
          <button id="print-btn" type="button" onClick={handlePrint}>
            Print
          </button>
          <button id="reset-btn" type="button" onClick={this.reset}>
            Reset
          </button>
          <button id="sample-btn" type="button" onClick={this.handleSample}>
            Sample
          </button>
        </header>
        <main>
          <InputForm
            personal={personal}
            changePersonal={this.changePersonal}
            experiences={experiences}
            educations={educations}
            addExperience={this.addExperience}
            changeExperience={this.changeExperience}
            handleDeleteExperience={this.handleDeleteExperience}
            addEducation={this.addEducation}
            changeEducation={this.changeEducation}
            handleDeleteEducation={this.handleDeleteEducation}
          />
          <OutputView
            personal={personal}
            experiences={experiences}
            educations={educations}
          />
        </main>
      </div>
    );
  }
}

function handlePrint() {
  const printableElement = document.getElementById('output-container');
  const styles = window.getComputedStyle(printableElement);
  const printContents = printableElement.outerHTML;
  const printWindow = window.open(
    '',
    'PrintWindow',
    'width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes'
  );
  printWindow.document.write(`
    <html>
      <head>
        <title>Print</title>
        <style>
          ${document.head.innerHTML}
        </style>
      </head>
      <body>
        ${printContents}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

export default App;
