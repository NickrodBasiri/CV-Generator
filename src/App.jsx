import { useState } from "react";
import GenericInfo from "./components/genericInfo";
import Display from "./components/display";
import EducationInfo from "./components/educationInfo";
import './styles/app.css'
import ExperienceInfo from "./components/experienceInfo";

function App() {
    // Personal Info states
    const [personalDisplay, setPersonalDisplay] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Education info states
    const [education = [], setEducation] = useState([]);
    const [educationDisplay, setEducationDisplay] = useState(false);

    // Experience info states
    const [experience, setExperience] = useState([]);
    const  [experienceDisplay, setExperienceDisplay] = useState(false);
    return (
        <>
        <div id="body">
            <div id="inputs">
                <GenericInfo
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                personalDisplay={personalDisplay}
                setPersonalDisplay={setPersonalDisplay}
                />
                <EducationInfo
                education={education}
                setEducation={setEducation}
                educationDisplay={educationDisplay}
                setEducationDisplay={setEducationDisplay}/>
                <ExperienceInfo
                experience={experience}
                setExperience={setExperience}
                experienceDisplay={experienceDisplay}
                setExperienceDisplay={setExperienceDisplay}/>
            </div>
            <Display
            name={name}
            email={email}
            phone={phone}
            education={education}
            experience={experience}
            />
        </div>
        </>
    );
}

export default App;
