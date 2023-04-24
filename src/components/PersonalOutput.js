import React, { Component } from 'react';
import MailIcon from '../images/mail.svg';
import PhoneIcon from '../images/phone.svg';
import MapIcon from '../images/map-pin.svg';

const PersonalOutput = (props) => {
  const { personal } = props;

  return (
    <div id="personal-output-container" className="output">
      <h2 className="name">{`${personal.firstName} ${personal.lastName}`}</h2>
      <div id="contact-info-output">
        <img src={MailIcon} alt="email icon" className="icon" />
        {personal.email}
        <img src={PhoneIcon} alt="phone icon" className="icon" />
        {personal.phone}
        <img src={MapIcon} alt="map icon" className="icon" />
        {personal.location}
      </div>
    </div>
  );
};

export default PersonalOutput;
