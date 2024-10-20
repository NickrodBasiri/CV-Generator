import { useState } from "react";
import GenericInfo from "./components/genericInfo";
import Display from "./components/display";
import EducationInfo from "./components/educationInfo";
import './styles/app.css'

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [education = [], setEducation] = useState([]);
    return (
        <>
        <div id="body">
            <GenericInfo
            name={name}
            setName={setName}
            
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            />
            <EducationInfo 
            education={education}
            setEducation={setEducation}/>
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
