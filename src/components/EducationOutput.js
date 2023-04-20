import React, { Component } from 'react';

const EducationOutput = (props) => {
  const { educations } = props;

  return (
    <div id="education-output-container">
      <h2 className="section-header">EDUCATION</h2>
      {educations?.map((education) => (
        <div key={education.id}>
          <Education
            schoolName={education.schoolName}
            program={education.program}
            startMonth={education.startMonth}
            endMonth={education.endMonth}
          />
        </div>
      ))}
    </div>
  );
};

const Education = (props) => {
  const { schoolName, program, startMonth, endMonth } = props;

  console.log(startMonth);
  console.log(endMonth);

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
    <div>
      {schoolName}
      {program}
      {dates}
    </div>
  );
};

export default EducationOutput;
