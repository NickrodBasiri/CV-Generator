import { useState } from "react";
import GenericInfo from "./components/genericInfo";
import Display from "./components/display";
import EducationInfo from "./components/educationInfo";
import './styles/app.css'

function App() {
    // Personal Info states
    const [personalDisplay, setPersonalDisplay] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [educationDisplay, setEducationDisplay] = useState(false)
    const [education = [], setEducation] = useState([]);
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
            </div>
            <Display
            name={name}
            email={email}
            phone={phone}
            education={education}
            setEducation={setEducation}
            />
        </div>
        </>
    );
}

export default App;
