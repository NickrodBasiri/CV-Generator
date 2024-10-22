export default function EducationForm( {education, setEducation}) {
    return (
        <>
            <form id="educationInfo" onSubmit={(event) => {
                const form = document.querySelector("#educationInfo");
                event.preventDefault();
                const data = new FormData(event.target);
                const newEducation = {
                    schoolName: data.get("school-name"),
                    date: data.get("date"),
                    program: data.get("program"),
                    id: Date.now(),
                }

                setEducation([...education, newEducation]);
                form.reset();
            }}>
                <div id="education-form">
                    <div className="input">
                        <label htmlFor="school-name">School Name</label>
                        <input type="text" id="school-name" name="school-name"/>
                    </div>
                    <div className="input">
                        <label htmlFor="date">Date of Study</label>
                        <input type="text" id="date" name="date"/>
                    </div>
                    <div className="input">
                        <label htmlFor="program">Field of Study</label>
                        <input type="text" id="program" name="program"/>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div id="editButtons">
            {education.map((edu) => (
                    <div key={edu.id} className="education-edit-card">
                        <h1>{edu.schoolName}</h1>
                        <button>Edit {edu.schoolName} education</button>
                    </div>
                ))}
            </div>
        </>
    )
}