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
                        <Experience 
                            jobTitle={experience.jobTitle}
                            companyName={experience.companyName}
                            startMonth={experience.startMonth}
                            startYear={experience.startYear}
                            endMonth={experience.endMonth}
                            endYear={experience.endYear}
                            currentJob={experience.currentJob}
                            description={experience.description}
                        ></Experience>
                    </div>
                );
            })}
        </div>
    )
}

const Experience = (props) => {
    const { jobTitle, companyName, startMonth, startYear, endMonth, endYear, currentJob, description } = props;

    let dates = <p>{startMonth} {startYear} - {endMonth} {endYear}</p>;
    if (currentJob) {
        dates = <p>{startMonth} {startYear} - Present</p>
    }

    return (
        <div>
            <h3>{jobTitle}</h3>
            {companyName}
            {dates}
            {description}
        </div>
    )
}

export default ExperienceOutput;