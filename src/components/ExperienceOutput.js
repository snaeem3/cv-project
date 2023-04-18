import React from 'react';
// import uniqid from "uniqid";

const ExperienceOutput = (props) => {
  const { experiences } = props;

  return (
    <div>
      <h2>Work Experience</h2>
      {experiences?.map((experience) => (
        <div key={experience.id}>
          <Experience
            jobTitle={experience.jobTitle}
            companyName={experience.companyName}
            startMonth={experience.startMonth}
            startYear={experience.startYear}
            endMonth={experience.endMonth}
            endYear={experience.endYear}
            currentJob={experience.currentJob}
            description={experience.description}
          />
        </div>
      ))}
    </div>
  );
};

const Experience = (props) => {
  const {
    jobTitle,
    companyName,
    startMonth,
    startYear,
    endMonth,
    endYear,
    currentJob,
    description,
  } = props;

  const [yearStart, monthStart] = startMonth.split('-');
  const dateStart = new Date(yearStart, monthStart - 1, 1);
  const [yearEnd, monthEnd] = endMonth.split('-');
  const dateEnd = new Date(yearEnd, monthEnd - 1, 1);
  const options = { month: 'short', year: 'numeric' };
  const formattedDateStart = dateStart.toLocaleDateString('en-US', options);
  const formattedDateEnd = dateEnd.toLocaleDateString('en-US', options);

  let dates = (
    <p>
      {formattedDateStart} - {formattedDateEnd}
    </p>
  );
  if (currentJob) {
    dates = <p>{formattedDateStart} - Present</p>;
  }

  return (
    <div>
      <h3>{jobTitle}</h3>
      {companyName}
      {dates}
      <TextAreaWithBullets value={description} />
    </div>
  );
};

const TextAreaWithBullets = ({ value }) => {
  const lines = value.split('\n');

  return (
    <ul>
      {lines.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
};

export default ExperienceOutput;
