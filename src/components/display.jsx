import '../styles/display.css'

export default function Display({name, email, phone, linkedIn, github, education, experience}) {

    return (
        <>
        <div id="CV">
            <div id="header">
                <h1 className='name'>{name}</h1>
                <div id="contact-info">
                    <h1>{email ? <i className="fa-envelope fa-regular"></i> : ""} {email}</h1>
                    <h1>{phone ? <i className="fa-phone fa-solid"></i> : ""} {phone}</h1>
                    <h1><a href={linkedIn}>{linkedIn ? <i className="fa-brands fa-linkedin"></i> : ""}{linkedIn ? " LinkedIn" : ""}</a></h1>
                    <h1><a href={github}>{github ? <i className="fa-brands fa-github"></i> : ""} {github ? "Github" : ""}</a></h1>
                </div>
            </div>
            <div id="education-info">
                {education.length > 0 && (<><h1 className="title">Education</h1><hr></hr></>)}
                {education.map((edu) => (
                    <div key={edu.id} className="education-card">
                            <div id="top">
                                <h1 className="schoolTitle">{edu.schoolName}</h1>
                                <h1 className="educationDate">{edu.startDate} - {edu.endDate}</h1>           
                            </div>
                            <h1 className="schoolLocation">{edu.location}</h1>
                        <h1 className="educationProgram">{edu.program}</h1>
                    </div>
                ))}
            </div>
            <div id="experience-info">
            {experience.length > 0 && (<><h1 className="title">Experience</h1><hr></hr></>)}
                {experience.map((exp) => (
                    <div key={exp.id} className="experience-card">
                        <div id="top">
                            <h1 className="jobName">{exp.companyName} | <em>{exp.jobName}</em></h1>
                            <h1 className="jobDate">{exp.startDate} - {exp.endDate}</h1>
                        </div>
                        <h1 className="jobTasks">{exp.responsibilities}</h1>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}