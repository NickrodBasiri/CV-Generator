import '../styles/display.css'

export default function Display({name, email, phone, education, setEducation}) {

    const removeEducation = (schoolName) => {
        setEducation(education.filter((edu) => edu.schoolName !== schoolName));
    }
    return (
        <>
        <div id="CV">
            <div id="header">
                <h1>{name}</h1>
                <div id="contact-info">
                    <h1>{email}</h1>
                    <h1>{phone}</h1>
                </div>
            </div>
            <div id="education-info">
                <h1>Education</h1>
                {education.map((edu) => (
                    <div key={edu.schoolName} className="education-card">
                        <div id="top">
                            <h1>{edu.schoolName}</h1>
                            <h1>{edu.date}</h1>
                        </div>
                        <h1>{edu.program}</h1>
                        <button onClick={() => removeEducation(edu.schoolName)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}