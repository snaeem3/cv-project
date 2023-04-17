import React from "react";
import ExperienceOutput from "./ExperienceOutput";
import EducationOutput from "./EducationOutput";

const OutputView = (props) => {
    const { personalInfo, experiences, educations } = props;

    return (
        <div id="outputViewContainer">
            {/* <PersonalOutput personalInfo={personalInfo}></PersonalOutput> */}
            <ExperienceOutput experiences={experiences}></ExperienceOutput>
            <EducationOutput educations={educations}></EducationOutput>
        </div>
    );
}

export default OutputView;