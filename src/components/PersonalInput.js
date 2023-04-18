import React, { Component } from 'react';

class PersonalInput extends Component {
  render() {
    const { personal, changePersonal } = this.props;

    return (
      <div id="personal-input-container" className="input">
        <h2>Personal Details</h2>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={(e) => changePersonal(e)}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={(e) => changePersonal(e)}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
        <label htmlFor="email">Email Address</label>
        <input
          onChange={(e) => changePersonal(e)}
          type="email"
          id="email"
          name="email"
          placeholder="email@xyz.com"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          onChange={(e) => changePersonal(e)}
          type="tel"
          id="phone"
          name="phone"
          placeholder="123-456-7890"
        />
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) => changePersonal(e)}
          type="text"
          id="location"
          name="location"
          placeholder="City, State"
        />
      </div>
    );
  }
}

export default PersonalInput;
