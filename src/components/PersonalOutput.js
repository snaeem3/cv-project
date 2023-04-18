import React, { Component } from 'react';

const PersonalOutput = (props) => {
  const { personal } = props;

  return (
    <div id="personal-output-container" className="output">
      {`${personal.firstName} ${personal.lastName}`}
      {personal.email}
      {personal.phone}
      {personal.location}
    </div>
  );
};

export default PersonalOutput;
