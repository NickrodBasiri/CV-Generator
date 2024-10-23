import '../styles/educationInfo.css'
import EducationForm from './educationForm';
export default function EducationInfo( {education, setEducation, educationDisplay, setEducationDisplay} ) {
    const handleDisplay = () => {
        setEducationDisplay(!educationDisplay);
    }
    return (
        <>
        <button className='inputButton' onClick={handleDisplay}>Education</button>
        {educationDisplay && (
            <EducationForm
            education={education}
            setEducation={setEducation}/>
        )}
        </>
    )
}