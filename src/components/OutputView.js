import React from "react";
import ExperienceOutput from "./ExperienceOutput";

const OutputView = (props) => {
    const { personalInfo, experiences, educations } = props;

    return (
        <div>
            {/* <PersonalOutput personalInfo={personalInfo}></PersonalOutput> */}
            <ExperienceOutput experiences={experiences}></ExperienceOutput>
            {/* <EducationOutput educations={educations}></EducationOutput> */}
        </div>
    );
}

export default OutputView;