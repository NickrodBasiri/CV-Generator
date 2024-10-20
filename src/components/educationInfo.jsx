export default function EducationInfo( {education, setEducation} ) {
    return (
        <>
        <form onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            const newEducation = {
                schoolName: data.get("school-name"),
                date: data.get("date"),
                program: data.get("program"),
            }
            setEducation([...education, newEducation]);
        }}>
            <div id="education-info">
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
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}