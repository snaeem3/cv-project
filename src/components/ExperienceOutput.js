import React from "react";
// import uniqid from "uniqid";

const ExperienceOutput = (props) => {
    const {experiences} = props;

    return (
        <div>
            <h2>Work Experience</h2>
            {experiences?.map((experience) => {
                return (
                    <div key={experience.id}>
                        <Experience experienceInfo={experience}></Experience>
                    </div>
                );
            })}
        </div>
    )
}

const Experience = (props) => {
    const { jobTitle, companyName, startDate, endDate, curentJob, description } = props;

    return (
        <div>
            <h3>{jobTitle}</h3>
            {companyName}
            {description}
        </div>
    )
}

export default ExperienceOutput;