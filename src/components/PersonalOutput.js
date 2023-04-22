import React, { Component } from 'react';

const PersonalOutput = (props) => {
  const { personal } = props;

  return (
    <div id="personal-output-container" className="output">
      <h2 className="name">{`${personal.firstName} ${personal.lastName}`}</h2>
      {/* <br /> */}
      {personal.email} | {personal.phone} | {personal.location}
    </div>
  );
};

export default PersonalOutput;
