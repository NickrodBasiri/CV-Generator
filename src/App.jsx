import { useRef, useState } from "react";
import GenericInfo from "./components/genericInfo";
import Display from "./components/display";
import EducationInfo from "./components/educationInfo";
import ExperienceInfo from "./components/experienceInfo";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import './styles/app.css'

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

        const displayRef = useRef();

        const handleDownloadPDF = () => {
            const content = displayRef.current;

            const inchToPx = 96;
            const widthInPx = 8.5 * inchToPx;  // 8.5 inches width
            const heightInPx = 11 * inchToPx;  // 11 inches height
        
            html2canvas(content, {
                width: widthInPx,
                height: heightInPx,
                scale: 2,
            }).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("portrait", "in", [8.5, 11]);
                pdf.addImage(imgData, "PNG", 0, 0, 8.5, 11);
                pdf.save("Resume.pdf");
            });
        };

    return (
        <>
        <div id="body">
            <div id="left">
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
                <button id="download" onClick={handleDownloadPDF}>Download CV</button>
            </div>
            <Display
            name={name}
            email={email}
            phone={phone}
            education={education}
            experience={experience}
            ref={displayRef}
            />
        </div>
        </>
    );
}

export default App;
