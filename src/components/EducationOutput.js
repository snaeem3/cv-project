import React, { Component } from 'react';

const EducationOutput = (props) => {
  const { educations } = props;

  return (
    <div id="education-output-container">
      <h2>Education</h2>
      {educations?.map((education) => (
        <div key={education.id}>
          <Education
            schoolName={education.schoolName}
            startMonth={education.startMonth}
            endMonth={education.endMonth}
          />
        </div>
      ))}
    </div>
  );
};

const Education = (props) => {
  const { schoolName, startMonth, endMonth } = props;

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
    <p>
      {formattedDateStart} - {formattedDateEnd}
    </p>
  );

  return (
    <div>
      {schoolName}
      {dates}
    </div>
  );
};

export default EducationOutput;
