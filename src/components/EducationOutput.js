import React, { Component } from 'react';

const EducationOutput = (props) => {
  const { educations } = props;

  return (
    <section id="education-output-container" className="output-section">
      <h2 className="section-header">EDUCATION</h2>
      {educations?.map((education) => (
        <Education
          schoolName={education.schoolName}
          program={education.program}
          startMonth={education.startMonth}
          endMonth={education.endMonth}
          id={education.id}
        />
      ))}
    </section>
  );
};

const Education = (props) => {
  const { schoolName, program, startMonth, endMonth, id } = props;

  const [yearStart, monthStart] = startMonth.split('-');
  const dateStart = new Date(yearStart, monthStart - 1, 1);
  const [yearEnd, monthEnd] = endMonth.split('-');
  const dateEnd = new Date(yearEnd, monthEnd - 1, 1);
  const options = { month: 'short', year: 'numeric' };
  const formattedDateStart = dateStart.toLocaleDateString('en-US', options);
  const formattedDateEnd = dateEnd.toLocaleDateString('en-US', options);

  const dates = (
    <p className="dates">
      {formattedDateStart} - {formattedDateEnd}
    </p>
  );

  return (
    <div key={id} className="education-container">
      <div className="date-block">
        <h3>{schoolName}</h3>
        {dates}
      </div>
      <i>{program}</i>
    </div>
  );
};

export default EducationOutput;
