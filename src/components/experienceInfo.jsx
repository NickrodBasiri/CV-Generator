import "../styles/experienceInfo.css"
import ExperienceForm from "./experienceForm";

export default function ExperienceInfo( {experience, setExperience, experienceDisplay, setExperienceDisplay} ) {
    const handleDisplay = () => {
        setExperienceDisplay(!experienceDisplay);
    }
    return (
        <>
        <button onClick={handleDisplay}>Experience</button>
        {experienceDisplay && (
            <ExperienceForm
            experience={experience}
            setExperience={setExperience}/>
        )}
        </>
    )
}