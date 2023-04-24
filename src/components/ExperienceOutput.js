import React from 'react';

const ExperienceOutput = (props) => {
  const { experiences } = props;

  return (
    <section className="output-section">
      <h2 className="section-header">WORK EXPERIENCE</h2>
      {experiences?.map((experience) => (
        <Experience
          jobTitle={experience.jobTitle}
          companyName={experience.companyName}
          startMonth={experience.startMonth}
          endMonth={experience.endMonth}
          currentJob={experience.currentJob}
          description={experience.description}
          id={experience.id}
        />
      ))}
    </section>
  );
};

const Experience = (props) => {
  const {
    jobTitle,
    companyName,
    startMonth,
    endMonth,
    currentJob,
    description,
    id,
  } = props;

  const [yearStart, monthStart] = startMonth.split('-');
  const dateStart = new Date(yearStart, monthStart - 1, 1);
  const [yearEnd, monthEnd] = endMonth.split('-');
  const dateEnd = new Date(yearEnd, monthEnd - 1, 1);
  const options = { month: 'short', year: 'numeric' };
  const formattedDateStart = dateStart.toLocaleDateString('en-US', options);
  const formattedDateEnd = dateEnd.toLocaleDateString('en-US', options);

  let dates = (
    <p className="dates">
      {formattedDateStart} - {formattedDateEnd}
    </p>
  );
  if (currentJob) {
    dates = <p className="dates">{formattedDateStart} - Present</p>;
  }

  return (
    <div key={id} className="experience-container">
      <div className="date-block">
        <h3>{companyName}</h3>
        {dates}
      </div>
      <i>{jobTitle}</i>
      <TextAreaWithBullets value={description} />
    </div>
  );
};

const TextAreaWithBullets = ({ value }) => {
  const lines = value.split('\n');

  return (
    <ul className="accomplishment-list">
      {lines.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
};

export default ExperienceOutput;
