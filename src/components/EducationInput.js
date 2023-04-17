import React, { Component } from "react";
import uniqid from "uniqid";

class EducationInput extends Component {
    render() {
        const { educations, addEducation, changeEducation, handleDeleteEducation } = this.props;

        return (
            <div id="education-input-container">
                <h2>Education</h2>
                {educations?.map((education, index) => {
                    return (
                        <div key={education.id}>
                            <label htmlFor="schoolName">School/University</label>
                            <input
                                onChange={(e) => changeEducation(e, education.id)}
                                type="text"
                                id="schoolName"
                                name="schoolName"
                                placeholder="School/University Name"
                            />
                            <label htmlFor="startMonth">Start month</label>
                            <input
                                onChange={(e) => changeEducation(e,education.id)}
                                type="month"
                                id="startMonth"
                                name="startMonth"
                            />
                            <label htmlFor="endMonth">End month</label>
                            <input
                                onChange={(e) => changeEducation(e,education.id)}
                                type="month"
                                id="endMonth"
                                name="endMonth"
                            />
                            <button onClick={() => handleDeleteEducation(index)}>Delete</button>
                        </div>
                    )
                })}
                <button onClick={addEducation}>Add</button>
            </div>
        )
    }
}

export default EducationInput;