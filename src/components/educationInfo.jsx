import '../styles/educationInfo.css'
import EducationForm from './educationForm';
export default function EducationInfo( {education, setEducation, educationDisplay, setEducationDisplay} ) {
    const handleDisplay = () => {
        setEducationDisplay(!educationDisplay);
    }
    return (
        <>
        <button onClick={handleDisplay}>Open seseme</button>
        {educationDisplay && (
            <EducationForm
            education={education}
            setEducation={setEducation}/>
        )}
        </>
    )
}